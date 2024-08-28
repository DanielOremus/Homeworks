function generateArray(length = 10) {
  return new Array(length).fill(0).map(() => generateRandomNumber())
}
function onBtnClick() {
  const array = generateArray()
  const resArr = generateTaxArray(array)
  displayResult(
    `Масив: ${array.join(" | ")}\nНовий масив: ${resArr.join(" | ")}`
  )
}

function displayResult(result) {
  alert(result)
}
function generateTaxArray(array, tax = 0.2) {
  return array.map((el) => el * tax)
}
function generateRandomNumber(min = 500, max = 1000) {
  return min + Math.floor(Math.random() * (max - min + 1))
}
