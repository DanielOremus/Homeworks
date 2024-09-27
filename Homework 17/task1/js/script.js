function generateArray(length = 10) {
  return new Array(length).fill(0).map((el) => generateRandomNumber())
}

function generateRandomNumber(min = -10, max = 10) {
  return min + Math.floor(Math.random() * (max - min + 1))
}
function onGenerateArray({
  elementEntryInput,
  getEntriesBtn,
  resultEntryTag,
  resultTag,
}) {
  const array = generateArray()
  try {
    resultTag.innerText = `Масив: ${array}\nДодатних: ${MyArray.getPositiveCount(
      array
    )}\nВід'ємних: ${MyArray.getNegativeCount(array)}`
    getEntriesBtn.onclick = onGetEntries.bind(
      null,
      array,
      elementEntryInput,
      resultEntryTag
    )
  } catch (error) {
    handleError(error)
  }
}
function onGetEntries(array, elEntryInput, resultEntryTag) {
  const el = parseInt(elEntryInput.value)
  console.log(el)

  try {
    resultEntryTag.innerText = `Кількість входжень: ${MyArray.getElEntryNumber(
      el,
      array
    )}`
  } catch (error) {
    handleError(error)
  }
}

window.onload = () => {
  const elementEntryInput = document.querySelector("input")
  const buttons = document.querySelectorAll("button")
  const generateArrayBtn = buttons[0]
  const getEntriesBtn = buttons[1]
  const resultTag = document.querySelector(".result")
  const resultEntryTag = document.querySelector(".entry-result")
  generateArrayBtn.onclick = onGenerateArray.bind(null, {
    elementEntryInput,
    getEntriesBtn,
    resultTag,
    resultEntryTag,
  })
}
function handleError(error) {
  alert(error.message)
}
