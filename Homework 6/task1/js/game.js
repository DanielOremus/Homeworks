class Game {
  labelTextArr = ["Координата Х:", "Координата Y:"]
  buttonsArr = [
    {
      title: "New Game",
      classes: "btn btn-lg btn-primary",
      action: () => this.onStart(),
    },
    {
      title: "Shoot",
      classes: "btn btn-lg btn-primary",
      action: () => this.validateUserPos(),
    },
    {
      title: "Go to HW6 Page",
      classes: "btn btn-lg btn-primary",
      action: () => (window.location.href = "../index.html"),
    },
  ]
  battleFieldContainer = "graphic-container"
  constructor(selector) {
    this.container = document.querySelector(selector)
    console.log(this.container)

    this.render()
  }
  render() {
    const inputSection = this.generateInputSection()
    const buttonSection = this.generateButtonSection()
    const wrapper = this.generateEmptyRow("row")
    const colWrapper = this.generateCol("col")
    const battleFieldContainer = this.generateCol(
      `${this.battleFieldContainer} col d-flex`
    )
    colWrapper.append(inputSection, buttonSection)
    wrapper.append(colWrapper, battleFieldContainer)
    this.container.appendChild(wrapper)
  }
  validateUserPos() {
    const values = [...document.querySelectorAll("input")].map((el) =>
      parseInt(el.value)
    )
    values.some((el) => isNaN(el) || el <= 0)
      ? this.displayResult(this.getResultMessage())
      : this.onShoot(values)
  }
  onShoot(userValues) {
    let result
    if (this.shipPos.x === userValues[0] && this.shipPos.y === userValues[1]) {
      result = "hit"
    } else result = "missed"
    const message = this.getResultMessage(result)
    const color = this.getResultColor(result)
    const cellToChange = getShootedCell(userValues)
    changeCellColor(cellToChange, color)
    setTimeout(() => {
      displayResult(message)
    }, 100)
  }
  getShootedCell(userValues) {
    let row = document.querySelectorAll(".tr")
    row = row[row.length - userValues[1]]
    const col = row.querySelectorAll(".td")[userValues[0] - 1]
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
  onStart() {
    console.log(this.battleFieldContainer)

    new Battlefield(`.${this.battleFieldContainer}`)
  }
  generateInputSection() {
    const section = this.generateEmptyRow("col-8")
    for (let i = 0; i < this.labelTextArr.length; i++) {
      const label = document.createElement("label")
      label.innerText = this.labelTextArr[i]
      const input = document.createElement("input")
      input.setAttribute("class", "form-control")
      section.append(label, input)
    }
    return section
  }
  generateCol(classes) {
    const col = document.createElement("div")
    col.setAttribute("class", classes)
    return col
  }
  generateEmptyRow(classes) {
    const row = document.createElement("div")
    row.setAttribute("class", classes)
    return row
  }
  generateButton(btnObj) {
    const button = document.createElement("button")

    button.innerText = btnObj.title
    button.onclick = btnObj.action
    button.setAttribute("class", btnObj.classes)
    return button
  }

  generateButtonSection() {
    const section = this.generateCol("col-8 mt-4 d-flex justify-content-around")

    for (const btnObj of this.buttonsArr) {
      section.appendChild(this.generateButton(btnObj))
    }

    return section
  }
  getResultMessage(result) {
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
  displayResult(text) {
    alert(text)
  }
}

window.onload = () => new Game(".game-container")
