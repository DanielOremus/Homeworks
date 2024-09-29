window.onload = () => {
  const buttons = [...document.querySelectorAll("button")]
  buttons.pop() //* Видалення кнопки переходу на попередню стрінку
  const allInputs = getAllInputs()
  const operations = [
    (a, b) => a + b,
    (a, b) => a - b,
    (a, b) => a * b,
    (a, b) => a / b,
  ]
  buttons.forEach((el, i) => {
    el.onclick = onCalculate.bind(null, allInputs, operations[i])
  })
}
function onCalculate(allInputs, operationFunc) {
  const [firstNumInput, secondNumInput, resInput] = allInputs
  const result = operationFunc(
    parseFloat(firstNumInput.value),
    parseFloat(secondNumInput.value)
  )
  displayResult(result, resInput)
}

function getAllInputs() {
  return document.querySelectorAll("input")
}
function displayResult(value, input) {
  input.value = value
}
