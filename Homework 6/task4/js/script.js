function validate() {
  const userHeight = parseInt(document.querySelector("input").value)
  let msg
  if (isNaN(userHeight) || userHeight <= 0) msg = "error"
  else {
    const triangle = generateTriangle(userHeight)
    displayTriangle(triangle)
    msg = "generated"
  }
  setTimeout(() => {
    displayMessage(getMessage(msg))
  }, 100)
}

function generateTriangle(height) {
  clearContent()
  const triangleContainer = document.createElement("div")
  for (let i = 0; i < height; i++) {
    const triangleRow = document.createElement("div")
    triangleRow.setAttribute("class", "d-flex justify-content-center")
    const symbolsNumberToAdd = 2 * i + 1
    for (let j = 0; j < symbolsNumberToAdd; j++) {
      const span = document.createElement("span")
      span.innerText = "^"
      triangleRow.appendChild(span)
    }
    triangleContainer.appendChild(triangleRow)
  }
  return triangleContainer
}
function getContainer() {
  const container = document.querySelector(".container")
  return container
}
function clearContent() {
  getContainer().innerText = ""
}
function displayTriangle(triangleContainer) {
  getContainer().appendChild(triangleContainer)
}
function getMessage(message) {
  let textToShow
  switch (message) {
    case "generated":
      textToShow = "Ось ваш трикутник"
      break

    default:
      textToShow = "Помилка, перевірте введені значення"
      break
  }
  return textToShow
}
function displayMessage(text) {
  alert(text)
}
