//Всі функції описані окремо (не перевикористовуємо функції, які можуть допомогти в інших обчисленнях (спеціально для практики))

//Генерація масиву
function generateArray(length, min, max) {
  return new Array(length).fill(0).map(() => generateRandomNumber(min, max))
}
function generateRandomNumber(min = 1, max = 10000) {
  return min + Math.floor(Math.random() * (max - min + 1))
}

// Пункт 1
function getMoreThan1000Array(array) {
  return array.filter((el) => el > 1000)
}
// Пункт 2
function getMoreThan1000IndexesArray(array) {
  return array.reduce((accumulator, el, i) => {
    if (el > 1000) accumulator.push(i)
    return accumulator
  }, [])
}
// Пункт 3
function getMoreThanPrevArray(array) {
  // return array.filter((el, i, arr) => el > arr?.[i - 1]) Не включаємо 0 елемент масиву
  /*Включаємо 0 елемент масиву*/
  const firstElement = array[0]
  return array.reduce(
    (accumulator, el, i, arr) => {
      if (el > arr?.[i - 1]) accumulator.push(el)
      return accumulator
    },
    [firstElement]
  )
}
//Пункт 4
function getInPercentArray(array, max = 10000) {
  return array.map((el) => (el * 100) / max)
}

//Пункт 5
function getPriceChangeCount(array) {
  // I варіант
  return array.reduce(
    (accumulator, el, i, arr) =>
      arr[i - 1] && el !== arr[i - 1] ? accumulator + 1 : accumulator,
    0
  )
  //II варіант
  // return array.reduce(
  //   (accumulator, el, i, arr) =>
  //     el === arr?.[i - 1] ? accumulator - 1 : accumulator,
  //   array.length - 1
  // )
}

//Пункт 6
function hasLowerThan100(array) {
  return array.some((el) => el < 1000)
}
//Пункт 7
function areAllMoreThan1000(array) {
  return array.every((el) => el > 1000)
}
//Пункт 8
function getMoreThan1000Number(array) {
  return array.reduce(
    (accumulator, el) => (el > 1000 ? accumulator + 1 : accumulator),
    0
  )
}
//Пункт 9
function getSumOfMoreThan1000(array) {
  return array.reduce(
    (accumulator, el) => (el > 1000 ? accumulator + el : accumulator),
    0
  )
}
//Пункт 10
function getFirstMoreThan1000(array) {
  return array.find((el) => el > 1000)
}
//Пункт 11
function getFirstIndexOfMoreThan1000(array) {
  return array.findIndex((el) => el > 1000)
}
//Пункт 12

function getLastMoreThan1000(array) {
  return array.findLast((el) => el > 1000)
}
//Пункт 13
function getLastIndexOfMoreThan1000(array) {
  return array.findLastIndex((el) => el > 1000)
}

//Не стосуються задач
function isUserNumberValid(length) {
  return length > 0
}
function onBtnClick() {
  const userNumber = parseInt(document.querySelector("input").value)
  if (!isUserNumberValid(userNumber))
    displayResult("Помилка, введіть коректну кількість елементів")
  else {
    const MIN = 1
    const MAX = 10000
    const array = generateArray(userNumber, MIN, MAX)
    const funcArray = [
      getMoreThan1000Array,
      getMoreThan1000IndexesArray,
      getMoreThanPrevArray,
      getInPercentArray,
      getPriceChangeCount,
      hasLowerThan100,
      areAllMoreThan1000,
      getMoreThan1000Number,
      getSumOfMoreThan1000,
      getFirstMoreThan1000,
      getFirstIndexOfMoreThan1000,
      getLastMoreThan1000,
      getLastIndexOfMoreThan1000,
    ]
    const resultText = generateResultText(funcArray, array, MAX)
    displayResult(resultText)
  }
}
function generateResultText(arrayOfFuncs, arrayOfNumbers, max) {
  let result = `Масив: ${arrayOfNumbers}\n`
  for (let i = 0; i < arrayOfFuncs.length; i++) {
    const func = arrayOfFuncs[i]
    result += `${i + 1}. ${func(arrayOfNumbers, max)}\n`
  }
  // arrayOfFuncs.forEach((func,i)=>result += `${i + 1}. ${func(arrayOfNumbers, max)}\n`) - через forEach
  return result
}

function displayResult(text) {
  const resultContainer = document.querySelector(".result-container")
  resultContainer.innerText = text
}
