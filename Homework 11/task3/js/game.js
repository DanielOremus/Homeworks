class Game {
  buttons = [
    {
      title: "Start Game",
      classes: "btn btn-lg btn-primary",
      action: () => this.startGame(),
    },
    {
      title: "Go to HW11 Page",
      classes: "btn btn-lg btn-primary",
      action: () => (window.location.href = "../index.html"),
    },
  ]
  constructor(selector) {
    this.container = document.querySelector(selector)
    this.renderUserSection()
  }
  //Генерація розмітки
  renderUserSection() {
    const userSection = this.generateUserSection()

    this.container.append(userSection)
  }
  renderFieldSection() {
    const fieldSection = this.generateFieldSection()
    this.container.append(fieldSection)
    this.battlefield.render()
  }
  generateUserSection() {
    const mainContainer = this.generateDiv("row flex-column gy-3 user-section")
    const inputSection = this.generateInputSection()
    const btnSection = this.generateBtnSection()
    mainContainer.append(inputSection, btnSection)
    return mainContainer
  }
  generateFieldSection() {
    const section = this.generateDiv("row field-section")
    this.battlefield = new Battlefield(section)
    return section
  }
  generateInputSection() {
    const sectionContainer = this.generateDiv("col-4 input-section")
    const label = document.createElement("label")
    label.innerText = "Кількість снарядів (мінімум 5):"
    const input = document.createElement("input")
    input.setAttribute("class", "form-control")
    sectionContainer.append(label, input)
    return sectionContainer
  }
  generateBtnSection() {
    const sectionContainer = this.generateDiv(
      "col-4 d-flex justify-content-around btn-section"
    )
    for (const btnObj of this.buttons) {
      const btn = this.generateButton(btnObj)
      sectionContainer.append(btn)
    }
    return sectionContainer
  }
  generateButton(btnObj) {
    const btn = document.createElement("button")
    btn.innerText = btnObj.title
    btn.setAttribute("class", btnObj.classes)
    btn.onclick = btnObj.action
    return btn
  }
  generateDiv(classes) {
    const div = document.createElement("div")
    div.setAttribute("class", classes)
    return div
  }
  isUserNumberValid(userBullets) {
    return userBullets >= 5
  }
  generateRandomNumber(min = 0, max = 5) {
    return min + Math.floor(Math.random() * (max - min + 1))
  }
  //Ігрова складова
  startGame() {
    this.battlefield?.clearField()

    const userBullets = this.container.querySelector("input").value
    if (!this.isUserNumberValid(userBullets)) {
      const resultMessage = this.getResultMessage("bullets-error")
      this.displayText(resultMessage)
      return
    }
    this.bullets = userBullets
    this.shotCells = []
    this.destroyedShips = 0
    this.fieldArray = this.generateFieldArray()
    this.placeShips()
    console.log(this.fieldArray)
    this.renderFieldSection()
    this.addClickProcessing()
  }
  generateFieldArray() {
    const array = []
    for (let i = 0; i < 6; i++) {
      const middlewareArray = []
      for (let j = 0; j < 6; j++) {
        middlewareArray.push(0)
      }
      array.push(middlewareArray)
    }
    return array
  }
  onShoot(obj) {
    const { rowIndex, colIndex } = obj

    const alreadyShotCell = this.shotCells.find(
      (el) => el[0] === rowIndex && el[1] === colIndex
    )

    let resultMessage
    if (alreadyShotCell) {
      resultMessage = this.getResultMessage("already-shot")
      this.displayText(resultMessage)
      return
    }
    this.bullets--
    let color
    if (this.fieldArray[rowIndex][colIndex] === 1) {
      this.destroyedShips++
      resultMessage = this.getResultMessage("hit")
      color = "success"
    } else {
      resultMessage = this.getResultMessage("missed")
      color = "info"
    }
    this.battlefield.changeCellColor(obj, color)
    this.shotCells.push([rowIndex, colIndex])
    setTimeout(() => this.displayText(resultMessage), 100)
    setTimeout(() => {
      const areAllShipsDestroyed = this.destroyedShips === 5
      const isEmpty = this.bullets === 0
      if (areAllShipsDestroyed || isEmpty) {
        if (areAllShipsDestroyed) resultMessage = this.getResultMessage("win")
        else resultMessage = this.getResultMessage("empty")
        this.displayText(resultMessage)
        this.battlefield.clearField()
      }
    }, 200)
  }
  placeShips(shipsNumber = 5) {
    for (let i = 0; i < shipsNumber; i++) {
      let rowIndex
      let colIndex
      do {
        rowIndex = this.generateRandomNumber()
        colIndex = this.generateRandomNumber()
      } while (this.fieldArray[rowIndex][colIndex] === 1)
      this.fieldArray[rowIndex][colIndex] = 1
    }
  }

  //Системна складова
  addClickProcessing() {
    this.battlefield.container.addEventListener("click", (e) => {
      const clickedElement = e.target
      if (clickedElement.classList.contains("field-cell")) {
        const rowIndex = clickedElement.parentNode.getAttribute("x")
        const colIndex = clickedElement.getAttribute("y")
        this.onShoot({ rowIndex, colIndex })
      }
    })
  }
  getResultMessage(type) {
    let resultMessage
    switch (type) {
      case "bullets-error":
        resultMessage = "Помилка, введіть коректну кількість снарядів"
        break
      case "already-shot":
        resultMessage = "Ви вже стріляли сюди"
        break
      case "hit":
        resultMessage = `Ви потопили один корабель. Залишилось снарядів: ${this.bullets}`
        break
      case "missed":
        resultMessage = `Мимо, залишилось снарядів: ${this.bullets}`
        break
      case "win":
        resultMessage = "Вітаю! Усі кораблі потоплено. Можете почати нову гру"
        break
      case "empty":
        resultMessage = "Ваші снаряди закінчились, гра закінчена"
        break
    }

    return resultMessage
  }
  displayText(text) {
    alert(text)
  }
  render() {}
}
