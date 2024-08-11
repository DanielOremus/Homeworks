class Menu {
  colsArr = [
    {
      classes: "col-sm-3",
      content: () => this.generateInputSection(),
    },
    {
      classes: "col-sm-3 d-flex justify-content-around",
      content: () => this.generateButtonSection(),
    },
    {
      classes: "col-sm-3 text-center",
      content: () => this.generateListSection(),
    },
  ]
  buttonsArr = [
    {
      title: "Start",
      classes: "btn btn-lg btn-primary",
      action: this.validateOnStart.bind(this),
    },
    {
      title: "Go to HW6 Page",
      classes: "btn btn-lg btn-primary",
      action: () => (window.location.href = "../index.html"),
    },
  ]
  liArr = [
    {
      text: "Додати 2",
      action: () => {
        this.add(2)
        if (this.isEqual()) {
          this.displayMessage(this.getResultMessage("complete")) //Не знав куди це підкрутити
        }
      },
    },
    { text: "Додати 3", action: this.add.bind(this, 3) },
    { text: "Відняти 2", action: this.subtract.bind(this, 2) },
    { text: "Відняти 3", action: this.subtract.bind(this, 3) },
    {
      text: "Вивести суму",
      action: () => this.displayMessage(this.getResultMessage("show-number")),
    },
    // "Вихід",
  ]
  constructor(selector) {
    this.container = document.querySelector(selector)
    console.log(this.container)

    this.render()
  }
  generateRow(classes) {
    const row = document.createElement("div")
    row.setAttribute("class", classes)
    return row
  }
  add(numberToAdd) {
    this.currentNumber += numberToAdd
    if (this.isEqual()) {
      this.displayMessage(this.getResultMessage("complete")) //Не знав куди це підкрутити
    }
  }
  subtract(numberToSub) {
    this.currentNumber -= numberToSub
    if (this.isEqual()) {
      this.displayMessage(this.getResultMessage("complete")) //Не знав куди це підкрутити
    }
  }
  isEqual() {
    return this.startNumber === this.currentNumber ? true : false
  }
  generateInputSection() {
    const label = this.generateLabel("Число N")
    const input = this.generateInput("form-control")
    return [label, input]
  }
  generateCol(classes) {
    const col = document.createElement("div")
    col.setAttribute("class", classes)
    return col
  }
  generateLabel(labelText) {
    const label = document.createElement("label")
    label.innerText = labelText
    return label
  }
  generateInput(classes) {
    const input = document.createElement("input")
    input.setAttribute("class", classes)
    return input
  }
  generateButton(btnObj) {
    const btn = document.createElement("button")
    btn.setAttribute("class", btnObj.classes)
    btn.innerText = btnObj.title
    btn.onclick = btnObj.action
    return btn
  }
  generateButtonSection() {
    let array = []
    for (const btnObj of this.buttonsArr) {
      array.push(this.generateButton(btnObj))
    }
    return array
  }
  generateLi(liObj) {
    const li = document.createElement("li")
    li.innerText = liObj.text
    li.onclick = liObj.action
    return li
  }
  generateListSection() {
    const ol = document.createElement("ol")
    for (const liObj of this.liArr) {
      const li = this.generateLi(liObj)
      ol.appendChild(li)
    }
    return [ol]
  }
  render() {
    const row = this.generateRow("row flex-column gy-3 ")
    for (const colObj of this.colsArr) {
      const col = this.generateCol(colObj.classes)
      col.append(...colObj.content())
      row.append(col)
    }
    this.container.appendChild(row)
  }
  validateOnStart() {
    const userNumber = parseInt(document.querySelector("input").value)
    let msg
    if (isNaN(userNumber) || !userNumber) {
      msg = this.getResultMessage("error")
    } else {
      msg = this.getResultMessage("on-start")
      this.onStart(userNumber)
    }

    this.displayMessage(msg)
  }
  onStart(userNumber) {
    this.startNumber = userNumber
    this.currentNumber = 0

    console.log(this.currentNumber)
  }
  getResultMessage(result) {
    let message
    switch (result) {
      case "error":
        message = "Помилка, введіть коректне число"
        break
      case "show-number":
        message = `Наразі ваше число: ${this.currentNumber}`
        break
      case "on-start":
        message = "Почали!"
        break
      case "complete":
        message = "Вітаю, ви досягли введеного вами числа."
        break
    }
    return message
  }
  displayMessage(text) {
    alert(text)
  }
}
