class Battlefield {
  constructor(container) {
    this.container = container
  }

  render() {
    const field = this.generateField()
    this.container.append(field)
  }
  generateDiv(classes) {
    const div = document.createElement("div")
    div.setAttribute("class", classes)
    return div
  }
  generateField() {
    const field = this.generateDiv("field")
    for (let i = 0; i < 6; i++) {
      const row = this.generateDiv("row flex-nowrap field-row")
      row.setAttribute("x", i)

      for (let j = 0; j < 6; j++) {
        const col = this.generateDiv("col-2 bg-white field-cell")
        col.setAttribute("y", j)
        row.append(col)
      }
      field.append(row)
    }
    return field
  }
  clearField() {
    this.container.remove()
  }
  changeCellColor(coordsObj, color) {
    const { rowIndex, colIndex } = coordsObj
    const row = this.container.querySelector(`[x='${rowIndex}']`)

    const cell = row.querySelector(`[y='${colIndex}']`)

    cell.classList.remove("bg-white")
    cell.classList.add(`bg-${color}`)
  }
}
