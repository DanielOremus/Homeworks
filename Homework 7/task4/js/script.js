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
function getPositiveNumbersCount(array) {
  return array.filter((el) => el > 0).length
}
function getEvenNumbersCount(array) {
  return array.filter((el) => el % 2 === 0).length
}
function getBigger100NumbersCount(array) {
  return array.filter((el) => el > 100).length
}

function getResultMessage(array) {
  return `Парні: ${getEvenNumbersCount(
    array
  )} Додатні: ${getPositiveNumbersCount(
    array
  )} Більші за 100: ${getBigger100NumbersCount(array)}`
}
function displayText(text) {
  alert(text)
}
