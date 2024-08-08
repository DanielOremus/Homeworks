class Game {
  constructor(selector) {
    this.container = document.querySelector(selector)

    this.labelTextArr = [
      "Кількість снарядів",
      "Довжина поля",
      "Висота поля",
      "Введіть координати позиції корабля (через ;)",
    ]
    this.btnArr = [
      {
        title: "New Game",
        classes: "btn btn-primary btn-lg me-2",
        action: this.onNewGame.bind(this),
      },
      {
        title: "Shoot",
        classes: "btn btn-primary btn-lg me-2 disabled",
        action: this.validateUserPos.bind(this),
      },
      {
        title: "Go to HW5 Page",
        classes: "btn btn-primary btn-lg",
        action: () => (window.location.href = "../index.html"),
      },
    ]

    let rowContainer = this.createRow()
    for (
      let labelIndex = 0;
      labelIndex < this.labelTextArr.length;
      labelIndex++
    ) {
      const colContainer = this.createCol()
      this.renderFormLine(
        this.labelTextArr[labelIndex],
        "col-sm-3",
        colContainer
      )
      rowContainer.appendChild(colContainer)
    }
    this.container.appendChild(rowContainer)
    rowContainer = this.createRow()
    const colContainer = this.createCol()

    for (const obj of this.btnArr) {
      this.renderBtn(obj, colContainer)
    }
    rowContainer.appendChild(colContainer)
    this.container.appendChild(rowContainer)
    this.saveAllInputs()
    this.saveAllButtons()
  }

  renderFormLine(labelText, classes, parentElement) {
    const label = document.createElement("label")
    label.innerText = labelText
    label.setAttribute("class", classes)
    this.renderInput("form-control", label)
    parentElement.appendChild(label)
  }
  createCol() {
    const element = document.createElement("div")
    element.setAttribute("class", "col")
    return element
  }
  createRow() {
    const element = document.createElement("div")
    element.setAttribute("class", "row row-cols-1 ")
    return element
  }
  renderInput(classes, parentElement) {
    const input = document.createElement("input")
    input.setAttribute("class", classes)

    parentElement.appendChild(input)
  }
  renderBtn(btnObj, parentElement) {
    const btn = document.createElement("button")
    btn.innerText = btnObj.title
    btn.setAttribute("class", btnObj.classes)
    btn.onclick = btnObj.action
    console.log(btnObj.action)

    parentElement.appendChild(btn)
    console.log(btn)
  }
  generateShipPos() {
    return {
      x: 1 + Math.floor(Math.random() * this.width),
      y: 1 + Math.floor(Math.random() * this.height),
    }
  }
  saveAllInputs() {
    this.allInputs = [...document.querySelectorAll("input")]
  }
  saveAllButtons() {
    this.allButtons = [...document.querySelectorAll("button")]
  }
  validateOnStart() {
    const inputs = [...this.allInputs]
    console.log(inputs)

    inputs.splice(3, 1)
    const startValuesArr = inputs.map((el) => parseInt(el.value))

    startValuesArr.some((value) => isNaN(value) || value <= 0)
      ? alert("Введіть коректні числа")
      : this.setNewGameValues(startValuesArr)
  }
  setNewGameValues(valuesArr) {
    this.bulletsNumber = parseInt(valuesArr[0])
    this.width = parseInt(valuesArr[1])
    this.height = parseInt(valuesArr[2])
  }
  setBtnsStatus(btnToChange) {
    for (const obj of btnToChange) {
      const btn = this.allButtons[obj.index]
      obj.toDisable
        ? btn.classList.add("disabled")
        : btn.classList.remove("disabled")
    }
  }
  onNewGame() {
    this.validateOnStart()
    this.shipPos = this.generateShipPos()
    console.log(this.shipPos)
    this.setBtnsStatus([
      { index: 0, toDisable: true },
      { index: 1, toDisable: false },
    ])
    alert("Гра почалась")
  }
  validateUserPos() {
    let userPos = this.allInputs[3].value
    userPos = userPos
      .split(" ")
      .join("")
      .split(";")
      .map((el) => parseInt(el))
    userPos.some((char) => isNaN(char) || char <= 0) || userPos.length !== 2
      ? alert("Введіть коректну позицію корабля")
      : this.onShoot(userPos)
  }
  onShoot(userPos) {
    this.bulletsNumber--
    let result

    if (userPos[0] === this.shipPos.x && userPos[1] === this.shipPos.y) {
      result = "hit"
    } else {
      if (this.bulletsNumber === 0) {
        result = "empty"
      } else result = "missed"
    }

    this.displayResult(result)
  }
  displayResult(result) {
    switch (result) {
      case "hit":
        alert("Вітаю, ви влучили")

        break
      case "missed":
        alert(`Мимо, залишилось снарядів: ${this.bulletsNumber}`)
        return
      case "empty":
        alert(
          `Снаряди закінчились. Корабель був на ${this.shipPos.x}; ${this.shipPos.y} позиції`
        )
        break
    }
    this.setBtnsStatus([
      { index: 0, toDisable: false },
      { index: 1, toDisable: true },
    ])
  }
}
