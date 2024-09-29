window.onload = () => {
  const convertButton = document.querySelector("button")
  const allInputs = getAllInputs()
  const dollarRate = 41
  const euroRate = 46
  convertButton.onclick = onConvert.bind(null, allInputs, {
    dollarRate,
    euroRate,
  })
}
function onConvert(allInputs, { dollarRate, euroRate }) {
  const [sumInUAHInput, sumInUSDInput, sumInEURInput] = allInputs
  const sumInUAH = parseFloat(sumInUAHInput.value)
  displayResults(
    { sumInUSD: sumInUAH / dollarRate, sumInEUR: sumInUAH / euroRate },
    sumInUSDInput,
    sumInEURInput
  )
}
function getAllInputs() {
  return document.querySelectorAll("input")
}
function displayResults({ sumInUSD, sumInEUR }, sumInUSDInput, sumInEURInput) {
  sumInUSDInput.value = sumInUSD.toFixed(2)
  sumInEURInput.value = sumInEUR.toFixed(2)
}
