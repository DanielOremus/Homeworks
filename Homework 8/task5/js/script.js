function generateRandomMark(min = 1, max = 5) {
  return min + Math.floor(Math.random() * (max - min + 1))
}

function generateArray() {
  const arrayLength = parseInt(document.querySelector("input").value)
  if (isArrayElementsNumberValid(arrayLength)) {
    const array = []
    for (let i = 0; i < arrayLength; i++) {
      array.push(generateRandomMark())
    }
    return array
  } else throw new Error("Введіть коректне значення кількості оцінок")
}
function isArrayElementsNumberValid(number) {
  return number > 0
}

function getMark2Number(array) {
  return array.reduce(
    (accumulator, el) => (el === 2 ? accumulator + 1 : accumulator),
    0
  )
}
function getGreatAndExcellentMarksNumber(array) {
  return array.reduce(
    (accumulator, el) => (el === 4 || el === 5 ? accumulator + 1 : accumulator),
    0
  )
}
function getLowMarksNumber(array) {
  return array.reduce(
    (accumulator, el) => (el === 2 || el === 1 ? accumulator + 1 : accumulator),
    0
  )
}
function getResultMessage() {
  let message
  try {
    const notesArray = generateArray()
    message = `Масив: ${notesArray.join(
      ", "
    )}, кількість двійок: ${getMark2Number(
      notesArray
    )}, кількість хороших: ${getGreatAndExcellentMarksNumber(
      notesArray
    )}, кількість оцінок, що нижче 3: ${getLowMarksNumber(notesArray)}`
  } catch (error) {
    message = error.message
  } finally {
    return message
  }
}
function displayText(text) {
  alert(text)
}

function onBtnClick() {
  displayText(getResultMessage())
}
