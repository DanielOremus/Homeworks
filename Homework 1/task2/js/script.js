function showTable() {
  removeTable()

  const a = parseFloat(document.querySelectorAll("input")[0].value)
  const b = parseFloat(document.querySelectorAll("input")[1].value)

  const operationArr = ["Сума", "Добуток", "Частка"]
  const table = document.createElement("table")

  for (i = 0; i < 3; i++) {
    const tr = document.createElement("tr")

    const td1 = document.createElement("td")
    td1.innerText = `${operationArr[i]}`
    const td2 = document.createElement("td")

    switch (i) {
      case 0:
        td2.innerText = a + b
        break
      case 1:
        td2.innerText = a * b
        break
      case 2:
        b === 0 ? (td2.innerText = "Error") : (td2.innerText = a / b)
        break
    }
    tr.append(td1, td2)
    table.appendChild(tr)
    table.setAttribute("border", "2px")
  }
  document.getElementById("table").appendChild(table)
}

function removeTable() {
  if (document.querySelector("table")) {
    document.querySelector("table").remove()
  }
}
