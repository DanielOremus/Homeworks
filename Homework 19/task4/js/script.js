function generateTable(
  rowsNumber = 3,
  colsNumber = 3,
  minNumber = 1,
  maxNumber = 100
) {
  const table = document.createElement("table")
  table.className = "table"
  table.setAttribute("clicks-number", 0)
  table.style.border = "2px solid"
  for (let i = 0; i < rowsNumber; i++) {
    const tr = document.createElement("tr")
    for (let j = 0; j < colsNumber; j++) {
      const td = document.createElement("td")
      td.className = "text-center"
      td.innerText = generateRandomNumber(minNumber, maxNumber)
      td.style.border = "1px solid"
      tr.append(td)
    }
    table.append(tr)
  }
  return table
}
function generateRandomNumber(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1))
}

window.onload = () => {
  const container = document.querySelector(".table-container")
  for (let i = 0; i < 3; i++) {
    const span = generateCounterEl(i + 1)
    container.append(span, generateTable())
  }
  container.onclick = onElClick
}

function generateCounterEl(i, initialValue = 0) {
  const span = document.createElement("span")
  span.innerText = `Таблиця ${i}: ${initialValue}`
  return span
}

function onElClick(e) {
  const clickedEl = e.target
  if (clickedEl.tagName === "TD") {
    const table = clickedEl.closest(".table")

    table.style.borderColor = "red"
    for (const tr of table.children) {
      for (const td of tr.children) {
        td.style.borderColor = "red"
      }
    }

    const currentClicks = parseInt(table.getAttribute("clicks-number"))
    table.setAttribute("clicks-number", currentClicks + 1)
    updateCounter(currentClicks + 1, table.previousElementSibling)
  }
}

function updateCounter(newValue, counterEl) {
  const textArr = counterEl.innerText.split(" ")
  textArr.pop()
  counterEl.innerText = `${textArr.join(" ")} ${newValue}`
}
