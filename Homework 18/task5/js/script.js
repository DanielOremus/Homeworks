window.onload = () => {
  const generateTableBtn = document.querySelector("button")
  const tableContainer = document.querySelector(".table-container")
  generateTableBtn.onclick = onGenerate.bind(null, tableContainer)
}

function generateRandomNumber(min = 1, max = 100) {
  return min + Math.floor(Math.random() * (max - min + 1))
}
function onGenerate(tableContainer) {
  const table = generateTable(3, 4)
  tableContainer.innerText = ""
  tableContainer.append(table)
}
function generateTable(
  rowsNumber,
  colsNumber,
  classesRow = "table table-bordered text-center"
) {
  const table = document.createElement("table")
  table.className = classesRow
  for (let i = 0; i < rowsNumber; i++) {
    const tr = document.createElement("tr")
    for (let j = 0; j < colsNumber; j++) {
      const td = document.createElement("td")
      td.innerText = generateRandomNumber()
      tr.append(td)
    }
    table.append(tr)
  }
  return table
}
