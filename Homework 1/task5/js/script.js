function getMeters(centimeters) {
  return centimeters / 100
}
function getKilometers(centimeters) {
  const result = getMeters(centimeters) / 1000
  return result < Math.pow(10, -4) ? "дуже мале число" : result.toFixed(4)
}

function showResult() {
  const enteredNumber = parseFloat(document.querySelector("input").value)
  alert(
    `В метрах: ${getMeters(enteredNumber)}, в кілометрах: ${getKilometers(
      enteredNumber
    )}`
  )
}
