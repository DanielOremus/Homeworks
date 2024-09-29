window.onload = () => {
  const checkBoxes = getCheckboxes()
  const radios = getRadios()
  const selects = getVehicleSelects()
  const resultContainer = document.querySelector(".result-container")
  const calculateButton = document.querySelector("button")
  calculateButton.onclick = onCalculate.bind(
    null,
    selects,
    checkBoxes,
    radios,
    resultContainer
  )
}

function getCheckboxes() {
  return document.querySelectorAll("input[type='checkbox']")
}

function onCalculate(selects, checkBoxes, radios, resultContainer) {
  const vehiclePrice = [...selects].reduce(
    (accumulator, el) => accumulator + parseInt(el.value),
    0
  )
  const foodPrice = getFormControlsSum(checkBoxes)

  const guidePrice = getFormControlsSum(radios)
  const totalSum = vehiclePrice + foodPrice + guidePrice
  displayResult(resultContainer, totalSum)
}
function getFormControlsSum(controls) {
  return [...controls].reduce(
    (accumulator, el) =>
      el.checked ? accumulator + parseInt(el.value) : accumulator,
    0
  )
}

function getRadios() {
  return document.querySelectorAll("input[type='radio']")
}
function getVehicleSelects() {
  return document.querySelectorAll("select")
}

function displayResult(resultContainer, sum) {
  resultContainer.innerText = `З вас: ${sum} грн`
}
