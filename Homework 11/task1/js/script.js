function generateRandomNumber(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1))
}
function generateArray(args) {
  const [minRowsNumber, maxRowsNumber, colsNumber, minColValue, maxColValue] =
    args
  const array = []
  const rowsNumber = generateRandomNumber(minRowsNumber, maxRowsNumber)
  for (let i = 0; i < rowsNumber; i++) {
    const middlewareArray = []
    for (let j = 0; j < colsNumber; j++) {
      middlewareArray.push(generateRandomNumber(minColValue, maxColValue))
    }
    array.push(middlewareArray)
  }
  return array
}
function getStartIndexAndStep(n) {
  let startIndex = 0
  let step = 1
  if (n !== "n") {
    step = 2
    if (n === "2n") startIndex = 1
  }
  return { startIndex, step }
}
function getSumInN(rowN, colN, array) {
  let sum = 0
  // let rowStartIndex = 0
  // let rowStep = 1
  // if (rowN !== "n") {
  //   rowStep = 2
  //   if (rowN === "2n") rowStartIndex = 1
  // }

  // let colStartIndex = 0
  // let colStep = 1
  // if (colN !== "n") {
  //   colStep = 2
  //   if (colN === "2n") colStartIndex = 1
  // }
  const rowObj = getStartIndexAndStep(rowN)
  const rowStartIndex = rowObj.startIndex
  const rowStep = rowObj.step
  console.log(rowObj)

  const colObj = getStartIndexAndStep(colN)
  const colStartIndex = colObj.startIndex
  const colStep = colObj.step
  console.log(colObj)

  for (let i = rowStartIndex; i < array.length; i += rowStep) {
    const currentCol = array[i]
    for (let j = colStartIndex; j < currentCol.length; j += colStep) {
      sum += currentCol[j]
    }
  }
  return sum
}
function getSumInRange(rowStartPos, rowEndPos, colStartPos, colEndPos, array) {
  let sum = 0

  for (let i = rowStartPos; i < rowEndPos; i++) {
    for (let j = colStartPos; j < colEndPos; j++) {
      sum += array[i][j]
    }
  }
  return sum
}
function collectResults(colsNumber, array) {
  const rowMiddleIndex = Math.floor(array.length / 2)
  const colMiddleIndex = Math.floor(colsNumber / 2)

  const sum1 = getSumInRange(0, rowMiddleIndex, 0, colMiddleIndex, array)
  const sum2 = getSumInRange(
    0,
    rowMiddleIndex,
    colMiddleIndex,
    colsNumber,
    array
  )
  const sum3 = getSumInRange(
    rowMiddleIndex,
    array.length,
    0,
    colMiddleIndex,
    array
  )
  const sum4 = getSumInRange(
    rowMiddleIndex,
    array.length,
    colMiddleIndex,
    colsNumber,
    array
  )
  const sum5 = getSumInN("2n", "n", array)
  const sum6 = getSumInN("n", "2n+1", array)
  const sum7 = getSumInN("2n", "2n+1", array)
  const sum8 = getSumInN("2n+1", "2n", array)

  return [sum1, sum2, sum3, sum4, sum5, sum6, sum7, sum8]
}

function areUserValuesValid(values) {
  return values.every((value) => value > 1)
}

function onBtnClick() {
  const inputValues = [...document.querySelectorAll("input")].map((input) =>
    parseInt(input.value)
  )
  if (!areUserValuesValid(inputValues))
    displayResult("Помилка, введіть коректні значення")
  else {
    const array = generateArray(inputValues)
    console.log(array)
    const results = collectResults(inputValues[2], array)
    displayResult(getResultText(results))
  }
}
function getResultText(results) {
  let resultText = ""
  for (let i = 0; i < results.length; i++) {
    resultText += `${i + 1}. ${results[i]}\n`
  }

  return resultText
}
function displayResult(text) {
  const container = document.querySelector(".result-container")
  container.innerText = text
}
