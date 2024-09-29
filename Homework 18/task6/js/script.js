window.onload = () => {
  const generateTableBtn = document.querySelector("button")
  const tableContainer = document.querySelector(".table-container")
  const scoresNumberInput = document.querySelector("input")
  generateTableBtn.onclick = onGenerate.bind(
    null,
    tableContainer,
    scoresNumberInput
  )
}

function generateRandomNumber(min = 1, max = 100) {
  return min + Math.floor(Math.random() * (max - min + 1))
}
function onGetAverage(resultContainer) {
  const userValues = [...document.querySelectorAll(".score-input")].map((el) =>
    parseInt(el.value)
  )
  const average =
    userValues.reduce((accumulator, el) => accumulator + el, 0) /
    userValues.length
  resultContainer.innerText = `Average: ${average}`
}
function onGenerate(tableContainer, scoresNumberInput) {
  const scoresNumber = parseInt(scoresNumberInput.value)
  if (!scoresNumber) return
  const table = generateTable(scoresNumber)
  const button = generateButton("Get Average")
  const p = document.querySelector("p")
  button.onclick = onGetAverage.bind(null, p)
  tableContainer.innerText = ""
  p.innerText = ""
  tableContainer.append(table, button)
}
function generateTable(scoresNumber, classesRow = "table") {
  const table = document.createElement("table")
  table.className = classesRow

  let scoreIndex = 0
  const rows = Math.ceil(scoresNumber / 2)
  for (let i = 0; i < rows; i++) {
    const tr = document.createElement("tr")
    for (let j = 0; j < 2 && scoresNumber > 0; j++, scoresNumber--) {
      const td = document.createElement("td")
      const input = generateInput(`${++scoreIndex} оцінка`)
      td.append(input)
      tr.append(td)
    }
    table.append(tr)
  }
  return table
}
function generateButton(title, classesRow = "btn fs-5 btn-primary w-100") {
  const button = document.createElement("button")
  button.className = classesRow
  button.innerText = title
  return button
}
function generateInput(title, classesRow = "form-control score-input") {
  const input = document.createElement("input")
  input.className = classesRow
  input.placeholder = title
  return input
}
