function generateRandomNumber(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1))
}
function generateArray(args) {
  const [shopsNumber, minIncomeValue, maxIncomeValue] = args
  const array = []
  for (let i = 0; i < shopsNumber; i++) {
    const middlewareArray = []
    for (let j = 0; j < 7; j++) {
      middlewareArray.push(generateRandomNumber(minIncomeValue, maxIncomeValue))
    }
    array.push(middlewareArray)
  }
  return array
}
function generateIncomePerWeekArray(array) {
  return array.map((shop) =>
    shop.reduce((accumulator, incomePerDay) => accumulator + incomePerDay)
  )
}
function getSumInRange(dayStartPos, dayEndPos, array) {
  return array.reduce((accumulator, week) => {
    for (let i = dayStartPos; i < dayEndPos; i++) {
      accumulator += week[i]
    }
    return accumulator
  }, 0)
}

function generateIncomesForEveryDay(array) {
  const resultArray = new Array(7).fill(0)
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      resultArray[j] += array[i][j]
    }
  }
  return resultArray
}
function areUserValuesValid(values) {
  return values.every((value) => value >= 1)
}
function getMaxForSpecificDay(dayIndex, array) {
  //I варіант
  // const specificDayIncomes = array.map((shop) => shop[dayIndex])
  // return Math.max(...specificDayIncomes)

  //II варіант (На мою думку - найкращий)
  return array.reduce(
    (accumulator, shop) =>
      shop[dayIndex] > accumulator ? shop[dayIndex] : accumulator,
    -Infinity
  )

  //III варіант
  // let max = -Infinity
  // for (const shop of array) {
  //   if (shop[dayIndex] > max) max = shop[dayIndex]
  // }
  // return max
}
function generateGreaterThan200Array(array) {
  //Без створення додаткових масивів (flat()+filter())
  const resultArray = []
  for (const shop of array) {
    for (const dayIncome of shop) {
      if (dayIncome > 200) resultArray.push(dayIncome)
    }
  }

  return resultArray
}

function insertionSort(maxIncomeArray, mainArray) {
  for (let i = 0; i < maxIncomeArray.length; i++) {
    const key = maxIncomeArray[i]
    const rowKey = mainArray[i]
    let j = i - 1
    while (j >= 0 && maxIncomeArray[j] < key) {
      maxIncomeArray[j + 1] = maxIncomeArray[j]
      mainArray[j + 1] = mainArray[j]
      j--
    }
    maxIncomeArray[j + 1] = key
    mainArray[j + 1] = rowKey
  }
  return { maxIncomeArray, sortedMainArray: mainArray }
}

function collectResults(mainArray) {
  const incomesPerEveryWeek = generateIncomePerWeekArray(mainArray)

  const incomesForEveryDay = generateIncomesForEveryDay(mainArray)
  const incomeForWorkingDays = getSumInRange(0, 5, mainArray)
  const incomeForWeekend = getSumInRange(5, 7, mainArray)
  const maxOfSpecificDay = getMaxForSpecificDay(3, mainArray)
  const sortedWeeksInAscendingOrder = [...mainArray].sort((a, b) => {
    const incomeForAWeek = a.reduce((accumulator, el) => accumulator + el)
    const incomeForBWeek = b.reduce((accumulator, el) => accumulator + el)
    return incomeForAWeek - incomeForBWeek
  })
  const generateThan200Array = generateGreaterThan200Array(mainArray)
  const sortedWeeksByDescendingOfMaxElement = [...mainArray].sort(
    (a, b) => Math.max(...b) - Math.max(...a)
  )
  //--------------Інші варіанти-------------------
  const maxIncomeForWeekArray = mainArray.map((el) => Math.max(...el))
  // const sortedWeeksByDescendingOfMaxElement = insertionSort(
  //   [...maxIncomeForWeekArray],
  //   [...mainArray]
  // ).sortedMainArray

  //Todo: Refactor this piece
  const combinedArray = maxIncomeForWeekArray
    .map((el, i) => ({
      value: el,
      index: i,
    }))
    .sort((a, b) => b.value - a.value)

  for (const obj of combinedArray) {
    mainArray.push(mainArray[obj.index])
  }
  mainArray.splice(0, combinedArray.length)
  console.log([...mainArray])

  // const sortedWeeksByDescendingOfMaxElement = combinedArray.map(
  //   (el) => mainArray[el.index]
  // )
  //-----------------------------------------------
  // console.log(sortedWeeksByDescendingOfMaxElement)

  // const sortedWeeksByDescendingSum = [...mainArray].sort((a, b) => {
  //   const incomeForAWeek = a.reduce((accumulator, el) => accumulator + el)
  //   const incomeForBWeek = b.reduce((accumulator, el) => accumulator + el)
  //   return incomeForBWeek - incomeForAWeek
  // })
  const sortedWeeksByDescendingSum = [...sortedWeeksInAscendingOrder].reverse()
  return [
    incomesPerEveryWeek,
    incomesForEveryDay,
    incomeForWorkingDays,
    incomeForWeekend,
    maxOfSpecificDay,
    generateThan200Array,
    sortedWeeksInAscendingOrder,
    sortedWeeksByDescendingOfMaxElement,
    sortedWeeksByDescendingSum,
  ]
}
function onBtnClick() {
  const inputValues = [...document.querySelectorAll("input")].map((input) =>
    parseInt(input.value)
  )
  if (!areUserValuesValid(inputValues))
    displayResult("Помилка, введіть коректні значення")
  else {
    const array = generateArray(inputValues)
    console.log([...array])
    const results = collectResults(array)

    displayResult(getResultText(results))
  }
}
function getResultText(results) {
  let resultText = ""
  for (let i = 0; i < results.length; i++) {
    if (typeof results[i] === "object")
      resultText += `${i + 1}. ${results[i].join(" | ")}\n`
    else resultText += `${i + 1}. ${results[i]}\n`
  }

  return resultText
}
function displayResult(text) {
  const container = document.querySelector(".result-container")
  container.innerText = text
}
