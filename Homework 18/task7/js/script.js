window.onload = () => {
  const checkBoxes = getCheckboxes()
  const radios = getRadios()
  const select = getVehicleSelect()
  const resultContainer = document.querySelector(".result-container")
  const calculateButton = document.querySelector("button")
  calculateButton.onclick = onCalculate.bind(
    null,
    select,
    checkBoxes,
    radios,
    resultContainer
  )
}

function getCheckboxes() {
  return document.querySelectorAll("input[type='checkbox']")
}

function onCalculate(select, checkBoxes, radios, resultContainer) {
  const vehiclePrice = parseInt(select.value)
  const foodPrice = [...checkBoxes].reduce(
    (accumulator, el) =>
      el.checked ? accumulator + parseInt(el.value) : accumulator,
    0
  )
  const guidePrice = parseInt([...radios].find((el) => el.checked).value)
  const totalSum = vehiclePrice + foodPrice + guidePrice
  displayResult(resultContainer, totalSum)
}

function getRadios() {
  return document.querySelectorAll("input[type='radio']")
}
function getVehicleSelect() {
  return document.querySelector("select")
}

function displayResult(resultContainer, sum) {
  resultContainer.innerText = `З вас: ${sum} грн`
}
