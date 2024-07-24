function getSum(a, b) {
  return a + b
}
function getProduct(a, b) {
  return a * b
}
function getFraction(a, b) {
  return (a / b).toFixed(2)
}

function showTable() {
  removeTable()
  const inputList = document.querySelectorAll("input")
  const a = parseFloat(inputList[0].value)
  const b = parseFloat(inputList[1].value)

  const operationArr = ["Сума", "Добуток", "Частка"]
  const table = document.createElement("table")

  for (i = 0; i < 3; i++) {
    const tr = document.createElement("tr")

    const td1 = document.createElement("td")
    td1.innerText = `${operationArr[i]}`
    const td2 = document.createElement("td")

    switch (i) {
      case 0:
        td2.innerText = getSum(a, b)
        break
      case 1:
        td2.innerText = getProduct(a, b)
        break
      case 2:
        b === 0
          ? (td2.innerText = "Error")
          : (td2.innerText = getFraction(a, b))
        break
    }
    tr.append(td1, td2)
    table.appendChild(tr)
    table.setAttribute("border", "2px")
  }
  document.getElementById("table-container").appendChild(table)
}

function removeTable() {
  document.getElementById("table-container").innerText = ""
}
