class SeaBattle {
  btnArray = [
    {
      title: "New Game",
      classes: "btn btn-lg btn-primary",
      action: () => this.onStart(),
    },

    {
      title: "Go to HW8 Page",
      classes: "btn btn-lg btn-primary",
      action: () => (window.location.href = "../index.html"),
    },
  ]
  labelTextArray = ["Ширина поля", "Кількість кораблів"]
  constructor(selector) {
    this.container = document.querySelector(selector)

    this.render()
  }
  generateDiv(classes) {
    const div = document.createElement("div")
    div.setAttribute("class", classes)

    return div
  }
  render() {
    this.container.appendChild(this.generateUserSection())
  }
  onStart() {
    const generationValues = [...document.querySelectorAll("input")].map((el) =>
      parseInt(el.value)
    )

    if (!this.areUserValuesValid(generationValues)) {
      this.displayMessage(this.getResultMessage("generate-values-error"))
      return
    }
    this.generationValues = {
      fieldWidth: generationValues[0],
      shipsNumber: generationValues[1],
    }
    this.destroyedShips = 0
    this.userShootCords = []
    this.removeBattlefield()

    this.generateBattlefield()
    this.battlefield.renderField()
    this.battlefield.container.addEventListener("cell-shoot", (e) => {
      const userCoordinate = e.target.getAttribute("coordinate")
      if (this.userShootCords.includes(userCoordinate)) {
        this.displayMessage(this.getResultMessage("already-shoot"))
      } else this.onShoot(userCoordinate)
    })
  }
  generateBattlefield() {
    const battlefieldContainer = this.generateDiv("battlefield")
    battlefieldContainer.classList.add("mt-4")

    this.battlefield = new Battlefield({
      container: battlefieldContainer,
      width: this.generationValues.fieldWidth,
      shipsNumber: this.generationValues.shipsNumber,
    })
    this.container.appendChild(this.battlefield.container)
  }
  onShoot(userCoordinate) {
    let msgType
    if (this.battlefield.shipPosArray[userCoordinate - 1] === 1) {
      this.battlefield.changeCellColor(userCoordinate, "success")
      msgType = "hit"
      this.destroyedShips++
    } else {
      msgType = "missed"
      this.battlefield.changeCellColor(userCoordinate, "info")
    }

    this.userShootCords.push(userCoordinate)
    setTimeout(() => {
      this.displayMessage(this.getResultMessage(msgType))
    }, 100)
    setTimeout(() => {
      if (this.destroyedShips === this.generationValues.shipsNumber) {
        msgType = "game-over"

        this.removeBattlefield()
        this.displayMessage(this.getResultMessage(msgType))
      }
    }, 200)
  }
  removeBattlefield() {
    this.battlefield?.container.remove()
  }
  areUserValuesValid(array) {
    return array.every((el) => el > 0) && array[0] >= array[1]
  }
  generateInputSection(labelText) {
    const section = this.generateDiv("col-3")

    const label = document.createElement("label")
    label.innerText = labelText

    const input = document.createElement("input")
    input.setAttribute("class", "form-control")

    section.append(label, input)
    return section
  }
  generateButton(btnObj) {
    const button = document.createElement("button")
    button.innerText = btnObj.title
    button.setAttribute("class", btnObj.classes)
    button.onclick = btnObj.action
    return button
  }
  generateButtonSection() {
    const section = this.generateDiv("col-3 d-flex justify-content-around")
    for (const btnObj of this.btnArray) {
      section.appendChild(this.generateButton(btnObj))
    }
    return section
  }
  generateUserSection() {
    const row = this.generateDiv("row flex-column gy-3")
    for (const labelText of this.labelTextArray) {
      row.appendChild(this.generateInputSection(labelText))
    }
    row.appendChild(this.generateButtonSection())
    return row
  }
  getResultMessage(type) {
    let msg
    switch (type) {
      case "generate-values-error":
        msg =
          "Перевірте правильність чисел. Візьміть до уваги, що кількість кораблів не може бути більшою ніж ширина поля"
        break
      case "hit":
        msg = `Ви потопили 1 корабель`
        break
      case "already-shoot":
        msg = "Ви вже стріляли сюди"
        break
      case "missed":
        msg = "Мимо. Маєте багато грошей, тому снаряди нескінчені"
        break
      case "game-over":
        msg = "Гра закінчилась, ви потопили всі кораблі. Можете почати нову гру"
        break
    }
    return msg
  }
  displayMessage(text) {
    alert(text)
  }
}
