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
function getAverage(array) {
  return array.reduce((accumulator, el) => accumulator + el) / array.length
}
function getNoteCategory(array) {
  if (array.every((el) => el === 5)) return "Відмінник"

  if (array.includes(2) || array.includes(1)) return "Двійочник"

  if (array.includes(3)) return "Трійочник"

  return "Хорошист"
}

function getResultMessage() {
  let message
  try {
    const notesArray = generateArray()
    message = `Масив: ${notesArray}, середнє: ${getAverage(notesArray).toFixed(
      1
    )}, категорія: ${getNoteCategory(notesArray)}`
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
