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
  return array.some((el) => isNaN(el) || el <= 0) ? false : true
}
function getInches(number) {
  return number / 2.54
}
function getPounds(number) {
  return number * 2.2
}
function getMiles(number) {
  return number / 1.6
}

function getResultMessage(numbersArr) {
  return `Дюйми: ${getInches(numbersArr[0]).toFixed(2)} Фунти: ${getPounds(
    numbersArr[1]
  ).toFixed(2)} Милі: ${getMiles(numbersArr[2]).toFixed(2)}`
}
function displayText(text) {
  alert(text)
}
