function getMeters(centimeters) {
  return centimeters / 100
}
function getKilometers(centimeters) {
  return getMeters(centimeters) / 1000
}

function showResult() {
  const enteredNumber = parseFloat(document.querySelector("input").value)
  alert(
    `В метрах: ${getMeters(enteredNumber)}, в кілометрах: ${getKilometers(
      enteredNumber
    )}`
  )
}
