function onNewGame() {
  const fieldWidth = 5
  const fieldHeight = 5
  const shipPos = generateShipPos(fieldWidth, fieldHeight)
  console.log(shipPos)
  bindFuncToShootBtn(shipPos)
  generateGraphicField(fieldWidth, fieldHeight)
  setTimeout(() => alert("Гра почалась"), 100)
}
function bindFuncToShootBtn(shipPos) {
  const btn = getShootBtn()
  btn.onclick = () => validateUserPos(JSON.stringify(shipPos))
}
function getShootBtn() {
  return document.getElementById("shoot-btn")
}
function generateCoordinateArea(maxX, maxY) {
  const areaDiv = document.createElement("div")
  areaDiv.setAttribute("class", "coordinate-area")
  for (let i = 0; i < maxY; i++) {
    const divRow = generateRowSection(
      maxX,
      "tr row g-0 flex-nowrap",
      "td col bg-white border border-black"
    )

    areaDiv.appendChild(divRow)
  }
  return areaDiv
}
function generateGraphicField(maxX, maxY) {
  const mainContainer = document.querySelector(".graphic-container").children
  const axisYContainer = mainContainer[0]
  const remainingContainer = mainContainer[1]
  clearGraphicField([...mainContainer])
  const axisY = generateAxis(
    maxX,
    maxY,
    "axis row row-col-1 flex-nowrap flex-column g-0",
    "axis-y-cell col bg-black align-content-center text-center",
    "y"
  )
  axisYContainer.appendChild(axisY)
  const area = generateCoordinateArea(maxX, maxY)
  remainingContainer.appendChild(area)

  const axisX = generateAxis(
    maxX,
    maxY,
    "axis row g-0",
    "axis-x-cell col bg-black text-center",
    "x"
  )
  remainingContainer.appendChild(axisX)
}
function clearGraphicField(containers) {
  containers.forEach((el) => (el.innerText = ""))
}

function generateRow(rowClasses) {
  const row = document.createElement("div")
  row.setAttribute("class", rowClasses)
  return row
}
function generateRowSection(maxX, rowClasses, colClasses) {
  const row = generateRow(rowClasses)
  for (let j = 1; j <= maxX; j++) {
    const col = generateCol(colClasses)
    row.appendChild(col)
  }
  return row
}
function generateCol(classes, text) {
  const col = document.createElement("div")
  col.setAttribute("class", classes)
  col.innerText = text || ""
  return col
}
function generateShipPos(maxX, maxY) {
  const shipPosX = 1 + Math.floor(Math.random() * maxX)
  const shipPosY = 1 + Math.floor(Math.random() * maxY)
  return { x: shipPosX, y: shipPosY }
}

function validateUserPos(shipPosObj) {
  const values = [...document.querySelectorAll("input")].map((el) =>
    parseInt(el.value)
  )
  values.some((el) => isNaN(el) || el <= 0)
    ? displayResult(getResultMessage())
    : onShoot(values, JSON.parse(shipPosObj))
}

function onShoot(coordinatesArr, shipPosObj) {
  let result
  if (
    shipPosObj.x === coordinatesArr[0] &&
    shipPosObj.y === coordinatesArr[1]
  ) {
    result = "hit"
  } else result = "missed"
  const message = getResultMessage(result)
  const color = getResultColor(result)
  const cellToChange = getShootedCell(coordinatesArr)
  changeCellColor(cellToChange, color)
  setTimeout(() => {
    displayResult(message)
  }, 100)
}

function generateAxis(maxX, maxY, rowClasses, colClasses, type) {
  const row = generateRow(rowClasses)

  if (type === "x") {
    for (let x = 1; x <= maxX; x++) {
      const col = generateCol(colClasses, x)
      row.appendChild(col)
    }
  } else {
    for (let y = maxY; y >= 1; y--) {
      const col = generateCol(colClasses, y)
      row.appendChild(col)
    }
  }
  return row
}

function getResultMessage(result) {
  let message
  switch (result) {
    case "hit":
      message = "Вітаю, ви влучили. Можете почати нову гру"
      break
    case "missed":
      message = "Мимо. Маєте багато грошей, тому снаряди нескінченні"
      break
    default:
      message = "Введіть коректні координати"
      break
  }
  return message
}
function displayResult(text) {
  alert(text)
}
