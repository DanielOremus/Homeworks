class Battlefield {
  constructor(obj) {
    this.container = obj.container
    this.fieldWidth = obj.width
    this.shipsNumber = obj.shipsNumber
    this.shipPosArray = this.generateShipPositions()
  }
  generateDiv(classes) {
    const div = document.createElement("div")
    div.setAttribute("class", classes)

    return div
  }

  generateAxis() {
    const axisRow = this.generateDiv("axis row g-0 d-flex flex-row flex-nowrap")

    for (let i = 1; i <= this.fieldWidth; i++) {
      const axisCell = this.generateDiv(
        "axis-cell col bg-black text-white text-center"
      )
      axisCell.innerText = i
      axisRow.appendChild(axisCell)
    }
    return axisRow
  }
  generateArea() {
    const areaRow = this.generateDiv("area row d-flex g-0 flex-row flex-nowrap")
    const cellShootEvent = new Event("cell-shoot", {
      bubbles: true,
    })
    for (let i = 1; i <= this.fieldWidth; i++) {
      const areaCell = this.generateDiv(
        "area-cell d-block col border border-black bg-white"
      )
      areaCell.setAttribute("coordinate", i)

      areaRow.appendChild(areaCell)
    }
    areaRow.onclick = (event) => event.target.dispatchEvent(cellShootEvent)
    return areaRow
  }
  renderField() {
    this.container.append(this.generateArea(), this.generateAxis())
  }

  changeCellColor(coordinate, color) {
    const cell = this.container.querySelector(`[coordinate='${coordinate}']`)

    cell.classList.remove("bg-white")
    cell.classList.add(`bg-${color}`)
  }
  generateShipPositions() {
    const array = []
    for (let i = 0; i < this.fieldWidth; i++) {
      array.push(0)
    }
    for (let placedShips = 0; placedShips < this.shipsNumber; ) {
      const randomIndex = Math.floor(Math.random() * this.fieldWidth)
      if (array[randomIndex] === 0) {
        array[randomIndex] = 1
        placedShips++
      }
    }
    console.log(array)

    return array
  }
}
