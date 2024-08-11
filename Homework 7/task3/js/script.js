function showResult() {
  const numbersArr = [...document.querySelectorAll("input")].map((el) =>
    parseFloat(el.value)
  )
  let msg
  if (isValid(numbersArr)) {
    msg = getResultMessage(numbersArr)
  } else msg = "Помилка, перевірте правильність чисел"
  displayText(msg)
}

function isValid(array) {
  return array.some((el) => isNaN(el)) ? false : true
}
function getSum(array) {
  return array.reduce((accumulator, el) => accumulator + el)
}
function getProduct(array) {
  return array.reduce((accumulator, el) => accumulator * el)
}
function getMax(array) {
  return Math.max(...array)
}

function getMin(array) {
  return Math.min(...array)
}
function getResultMessage(array) {
  return `Сума: ${getSum(array)} Добуток: ${getProduct(array)} Макс.: ${getMax(
    array
  )} Мін.: ${getMin(array)}`
}
function displayText(text) {
  alert(text)
}
