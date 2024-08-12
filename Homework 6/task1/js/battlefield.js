class Battlefield {
  width = 5
  height = 5

  constructor(selector) {
    this.container = document.querySelector(selector)
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

    for (let i = this.height; i >= 1; i--) {
      const row = this.generateEmptyRow("tr row g-0 flex-nowrap")
      for (let j = 1; j <= this.width; j++) {
        const col = this.generateCol("td col bg-white border border-black")
        const e = new CustomEvent("cell-picked", {
          detail: {
            coordinates: {
              x: j,
              y: i,
            },
          },
          bubbles: true,
        })

        col.onclick = () => col.dispatchEvent(e)

        row.appendChild(col)
      }

      areaDiv.appendChild(row)
    }
    // areaDiv.onclick =
    return areaDiv
  }
  getShootedCell(coordinates) {
    let row = document.querySelectorAll(".tr")
    console.log(row)
    console.log(coordinates)

    row = row[row.length - coordinates.y]
    console.log(coordinates)
    console.log(row)

    const col = row.querySelectorAll(".td")[coordinates.x - 1]
    return col
  }
  changeCellColor(coordinates, result) {
    const cell = this.getShootedCell(coordinates)
    cell.classList.remove("bg-white")
    cell.classList.add(`bg-${this.getResultColor(result)}`)
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
  generateCol(classes, text) {
    const col = document.createElement("div")
    col.setAttribute("class", classes)
    col.innerText = text || ""
    return col
  }
  clearBattlefield() {
    this.container.innerText = ""
  }
  generateEmptyRow(classes) {
    const row = document.createElement("div")
    row.setAttribute("class", classes)
    return row
  }
}
