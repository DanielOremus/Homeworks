function onGenerateAuto() {
  const inputs = document.querySelectorAll("input")
  const auto = new Auto(inputs[0].value, inputs[1].value, inputs[2].value)
  displayResult(auto)
}
function displayResult(obj) {
  const container = document.querySelector(".auto-container")
  container.innerText = obj
}
