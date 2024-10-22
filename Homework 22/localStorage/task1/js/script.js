window.onload = () => {
  bodyColorChanger()
  updateCounterEl()

  const colorInput = document.querySelector("input[type=color]")
  colorInput.value = getCurrentBackgroundColor()
  colorInput.oninput = colorChangeHandler
}

function colorChangeHandler() {
  const color = this.value
  localStorage.setItem("background", color)

  updateCounter()
}

function updateCounter() {
  updateChangesNumber()
  updateCounterEl()
}

function updateChangesNumber() {
  const changesNumber = parseInt(sessionStorage.getItem("changesNumber") || 0)
  sessionStorage.setItem("changesNumber", changesNumber + 1)
}
function updateCounterEl() {
  const counter = document.querySelector(".counter")
  counter.innerHTML = sessionStorage.getItem("changesNumber") || 0
}

function getCurrentBackgroundColor() {
  return localStorage.getItem("background") || null
}

function bodyColorChanger() {
  const backgroundColor = getCurrentBackgroundColor()
  document.body.style.backgroundColor = backgroundColor
}
