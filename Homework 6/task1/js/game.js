class Game {
  labelTextArr = ["Координата Х:", "Координата Y:"]
  buttonsArr = [
    {
      title: "New Game",
      classes: "btn btn-lg btn-primary",
      action: () => this.onStart(),
    },

    {
      title: "Go to HW6 Page",
      classes: "btn btn-lg btn-primary",
      action: () => (window.location.href = "../index.html"),
    },
  ]
  battlefieldSelector = "graphic-container"

  constructor(selector) {
    this.container = document.querySelector(selector)
    console.log(this.container)
    this.render()
    this.battlefield = new Battlefield(`.${this.battlefieldSelector}`)
    console.log(this.battlefield)

    this.battlefield.container.addEventListener("cell-picked", (e) => {
      this.onShoot(e.detail.coordinates)
    })
  }
  render() {
    const buttonSection = this.generateButtonSection()
    const wrapper = this.generateEmptyRow("row")
    const colWrapper = this.generateCol("col")
    const battleFieldContainer = this.generateCol(
      `${this.battlefieldSelector} col d-flex`
    )
    colWrapper.append(buttonSection)
    wrapper.append(colWrapper, battleFieldContainer)
    this.container.appendChild(wrapper)
  }

  onStart() {
    this.battlefield.clearBattlefield()
    this.battlefield = new Battlefield(`.${this.battlefieldSelector}`)

    this.battlefield.render()
  }

  onShoot(userCoordinates) {
    let result
    if (
      this.battlefield.shipPos.x === userCoordinates.x &&
      this.battlefield.shipPos.y === userCoordinates.y
    ) {
      result = "hit"
      setTimeout(() => {
        this.onStart()
      }, 500)
    } else result = "missed"
    const message = this.getResultMessage(result)
    console.log(userCoordinates)

    this.battlefield.changeCellColor(userCoordinates, result)
    setTimeout(() => {
      this.displayResult(message)
    }, 100)
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
