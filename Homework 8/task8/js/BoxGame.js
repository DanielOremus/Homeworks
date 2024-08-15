class BoxGame {
  minPrize = -500
  maxPrize = 500
  boxesNumber = 10
  btnArray = [
    {
      title: "Pick Box",
      classes: "btn btn-primary",
      action: () => this.onPickBox(),
    },
    {
      title: "Stop & Check Prize",
      classes: "btn btn-primary",
      action: () => this.onStop(),
    },
    {
      title: "Go to HW8 Page",
      classes: "btn btn-primary",
      action: () => (window.location.href = "../index.html"),
    },
  ]
  constructor(selector) {
    this.container = document.querySelector(selector)
    this.boxesArray = this.generateBoxesArray()

    this.userBoxesArray = []
    this.render()
  }
  generateBoxesArray() {
    let array = []
    for (let i = 0; i < this.boxesNumber; i++) {
      array.push(this.generateRandomPrize())
    }
    console.log(array)
    return array
  }
  onPickBox() {
    const userBoxIndex = parseInt(document.querySelector("input").value)
    let msgType
    if (!this.isUserBoxIndexValid(userBoxIndex)) {
      msgType = "box-index-error"
    } else {
      msgType = "successfully-picked"
      this.userBoxesArray.push(this.boxesArray[userBoxIndex - 1])
    }
    this.displayMessage(this.getResultMessage(msgType))
  }
  onStop() {
    if (!this.userBoxesArray.length) {
      this.displayMessage(this.getResultMessage("no-boxes-error"))
      return
    }
    const userTotalPrize = this.userBoxesArray.reduce(
      (accumulator, el) => accumulator + el
    )
    this.userBoxesArray = this.generateBoxesArray()
    this.displayMessage(this.getResultMessage("stop", userTotalPrize))
  }
  isUserBoxIndexValid(userBoxIndex) {
    return userBoxIndex >= 1 && userBoxIndex <= this.boxesNumber
  }
  generateRandomPrize() {
    return (
      this.minPrize +
      Math.floor(Math.random() * (this.maxPrize - this.minPrize) + 1)
    )
  }
  render() {
    this.container.appendChild(this.generateUserSection())
  }
  generateDiv(classes) {
    const div = document.createElement("div")
    div.setAttribute("class", classes)
    return div
  }
  generateButton(btnObj) {
    const button = document.createElement("button")
    button.innerText = btnObj.title
    button.setAttribute("class", btnObj.classes)
    button.onclick = btnObj.action
    return button
  }
  generateUserSection() {
    const section = this.generateDiv("row flex-column gy-3")
    const col1 = this.generateDiv("col-4")

    const label = document.createElement("label")
    label.innerText = `Введіть номер ящика (1-${this.boxesNumber})`

    const input = document.createElement("input")
    input.setAttribute("class", "form-control")

    col1.append(label, input)

    const col2 = this.generateDiv("col-4 d-flex justify-content-around")
    for (const btnObj of this.btnArray) {
      col2.appendChild(this.generateButton(btnObj))
    }

    section.append(col1, col2)

    return section
  }
  getResultMessage(type, userTotalPrize) {
    let msg
    switch (type) {
      case "successfully-picked":
        msg =
          "Ви вибрали ящик. Можете зупинитись, натиснувши на відповідну кнопку, або продовжити"
        break
      case "box-index-error":
        msg = "Введіть коректний індекс ящика"
        break
      case "no-boxes-error":
        msg = "Ви ще не вибрали жодний ящик"
        break
      case "stop":
        msg = `Ваш виграш: ${userTotalPrize}`
        break
    }
    return msg
  }
  displayMessage(text) {
    alert(text)
  }
}
