function displayTable() {
  const inputs = [...document.querySelectorAll("input")]
  let values = inputs.map((el) => el.value)
  console.log(values)

  const msg = values.pop()
  const tableParameters = values.map((el) => parseInt(el))
  console.log(tableParameters)

  if (isValid(tableParameters)) {
    const container = document.querySelector(".table-container")
    clearTable(container)
    const table = generateTable(tableParameters, msg)
    container.appendChild(table)
  } else alert("Помилка, перевірте правильність чисел")
}
function isValid(array) {
  return array.some((el) => isNaN(el) || el <= 0) ? false : true
}
function clearTable(container) {
  container.innerText = ""
}
function generateTable(tableParameters, text) {
  const table = document.createElement("table")
  table.setAttribute("class", "table table-bordered text-center")
  for (let rowIndex = 0; rowIndex < tableParameters[0]; rowIndex++) {
    const tr = document.createElement("tr")
    for (let colIndex = 0; colIndex < tableParameters[1]; colIndex++) {
      const td = document.createElement("td")
      td.innerText = text
      tr.appendChild(td)
    }
    table.appendChild(tr)
  }
  return table
}
