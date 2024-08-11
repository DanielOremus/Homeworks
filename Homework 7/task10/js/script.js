function generateInputs() {
  const temperaturesCount = parseInt(document.querySelector("input").value)

  if (validateTemperaturesCount(temperaturesCount)) {
    const container = document.querySelector(".user-temperature-container")
    clearUserInputs(container)
    for (let i = 1; i <= temperaturesCount; i++) {
      container.appendChild(generateInputSection(`Показник ${i}`))
    }
  } else displayText(getResultMessage("count-error"))
}

function validateTemperaturesCount(number) {
  return isNaN(number) || number <= 0 ? false : true
}

function showAveragePositiveTemperature() {
  const values = [...document.querySelectorAll(".user-temperature")].map((el) =>
    parseFloat(el.value)
  )

  if (validateUserTemperatures(values)) {
    displayText(getResultMessage("ok", values))
  } else displayText(getResultMessage("user-input-error"))
}
function validateUserTemperatures(array) {
  return array.some((el) => isNaN(el)) ? false : true
}
function getAveragePositiveTemperature(array) {
  const positiveTemperatures = array.filter((el) => el > 0)
  return (
    positiveTemperatures.reduce((accumulator, el) => accumulator + el) /
    positiveTemperatures.length
  )
}
function generateInputSection(labelText) {
  const section = document.createElement("div")
  section.setAttribute("class", "col-4")
  const label = document.createElement("label")
  label.innerText = labelText
  const input = document.createElement("input")
  input.setAttribute("class", "user-temperature form-control")

  section.append(label, input)
  return section
}
function clearUserInputs(container) {
  container.innerText = ""
}
function getResultMessage(result, values) {
  let msg
  switch (result) {
    case "count-error":
      msg = "Помилка, введіть коректну кількість показників"
      break
    case "user-input-error":
      msg = "Помилка, Перевірте правильність показників"
      break
    case "ok":
      msg = `Середнє: ${getAveragePositiveTemperature(values)}`
      break
  }
  return msg
}
function displayText(text) {
  alert(text)
}
