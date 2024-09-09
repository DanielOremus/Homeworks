// let myIterator = iterator(1, 12)
function onInputChange(button) {
  setResultContainerText("")
  const userValues = getUserValues()
  const areValuesValid = areUserValuesValid(userValues)
  if (areValuesValid)
    button.onclick = onBtnClick.bind(
      null,
      iterator(userValues[0], userValues[1])
    )
  else setResultContainerText("Помилка, введіть коректні значення")
}

window.onload = () => {
  const button = document.querySelector("button")
  const inputs = document.querySelectorAll("input")
  inputs.forEach((el) => (el.onkeyup = onInputChange.bind(null, button)))
  button.onclick = onBtnClick.bind(null, iterator(1, 12))
}

function onBtnClick(myIteratorFunc) {
  setResultContainerText(myIteratorFunc())
}

function iterator(min, max) {
  let currentValue = min - 1
  function iteration() {
    if (currentValue >= max) currentValue = min
    else currentValue++
    return currentValue
  }
  return iteration
}

function getUserValues() {
  return [...document.querySelectorAll("input")].map((el) => parseInt(el.value))
}
function areUserValuesValid(values) {
  return values.every((el) => !isNaN(el)) && values[0] <= values[1]
}

function setResultContainerText(text) {
  const resultContainer = document.querySelector(".result-container")
  resultContainer.innerText = text
}
