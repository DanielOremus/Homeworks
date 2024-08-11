class Battlefield {
  width = 5
  height = 5

  constructor(selector) {
    console.log(selector)

    this.container = document.querySelector(selector)
    this.render()
    this.shipPos = this.generateShipPos(this.width, this.height)
  }
  generateShipPos() {
    const shipPosX = 1 + Math.floor(Math.random() * this.width)
    const shipPosY = 1 + Math.floor(Math.random() * this.height)
    return { x: shipPosX, y: shipPosY }
  }

  render() {
    const vertical = document.createElement("div")
    const horizontal = document.createElement("div")
    const axisY = this.generateAxis(
      "axis row row-col-1 flex-nowrap flex-column g-0",
      "axis-y-cell col bg-black align-content-center text-center",
      "y"
    )

    const axisX = this.generateAxis(
      "axis row flex-nowrap g-0",
      "axis-x-cell col bg-black text-center",
      "x"
    )
    vertical.appendChild(axisY)
    const coordinateArea = this.generateCoordinateArea()
    horizontal.append(coordinateArea, axisX)
    console.log(this.container)

    this.container.append(vertical, horizontal)
  }
  generateAxis(rowClasses, colClasses, type) {
    const axis = this.generateEmptyRow(rowClasses)

    if (type === "x") {
      for (let x = 1; x <= this.width; x++) {
        const col = this.generateCol(colClasses, x)
        axis.appendChild(col)
      }
    } else {
      for (let y = this.height; y >= 1; y--) {
        const col = this.generateCol(colClasses, y)
        axis.appendChild(col)
      }
    }
    return axis
  }
  changeCellColor(cellElement, color) {
    cellElement.classList.remove("bg-white")
    cellElement.classList.add(`bg-${color}`)
  }
  generateCoordinateArea() {
    const areaDiv = document.createElement("div")
    areaDiv.setAttribute("class", "coordinate-area")
    for (let i = 0; i < this.width; i++) {
      const divRow = this.generateRowSection(
        "tr row g-0 flex-nowrap",
        "td col bg-white border border-black"
      )

      areaDiv.appendChild(divRow)
    }
    return areaDiv
  }
  getShootedCell(coordinatesArr) {
    let row = document.querySelectorAll(".tr")
    row = row[row.length - coordinatesArr[1]]
    const col = row.querySelectorAll(".td")[coordinatesArr[0] - 1]
    return col
  }
  changeCellColor(cellElement, color) {
    cellElement.classList.remove("bg-white")
    cellElement.classList.add(`bg-${color}`)
  }
  getResultColor(result) {
    let color
    switch (result) {
      case "hit":
        color = "success"
        break
      case "missed":
        color = "info"
        break
    }
    return color
  }
  generateRowSection(rowClasses, colClasses) {
    const row = this.generateEmptyRow(rowClasses)
    for (let j = 1; j <= this.width; j++) {
      const col = this.generateCol(colClasses)
      row.appendChild(col)
    }
    return row
  }
  generateCol(classes, text) {
    const col = document.createElement("div")
    col.setAttribute("class", classes)
    col.innerText = text || ""
    return col
  }
  generateEmptyRow(classes) {
    const row = document.createElement("div")
    row.setAttribute("class", classes)
    return row
  }
}
