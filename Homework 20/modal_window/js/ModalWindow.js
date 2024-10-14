class ModalWindow {
  constructor(min, max, containerSelector, resultSelector) {
    this.minValue = min
    this.maxValue = max
    this.dialogEl = this.generateDialogEl()

    this.container = this.findElementBySelector(containerSelector)
    this.resultContainer = this.findElementBySelector(resultSelector)
  }
  findElementBySelector(selector) {
    return document.querySelector(selector)
  }
  render() {
    this.container.append(this.dialogEl)
  }
  showModal() {
    this.dialogEl.showModal()
  }
  submitHandler(e) {
    e.preventDefault()
    const userNumber = parseFloat(this.dialogInputEl.value)
    if (
      isNaN(userNumber) ||
      userNumber < this.minValue ||
      userNumber > this.maxValue
    ) {
      this.dialogInputEl.classList.add("error")
      return
    }

    this.submit(userNumber)
  }

  submit(userNumber) {
    this.resultContainer.innerText = "Worker's age: " + userNumber
    this.closeModal()
  }
  generateForm() {
    const form = document.createElement("form")

    const input = document.createElement("input")
    input.placeholder = "Enter number"
    input.className = "form-control"
    this.dialogInputEl = input

    const valueLabel = document.createElement("label")
    valueLabel.innerText = `Min: ${this.minValue}, Max: ${this.maxValue}`

    const btnContainer = document.createElement("div")
    btnContainer.className = "btnContainer"

    const closeBtn = document.createElement("button")
    closeBtn.className = "btn btn-primary"
    closeBtn.innerText = "CLOSE"
    closeBtn.type = "reset"

    const submitBtn = document.createElement("button")
    submitBtn.className = "btn btn-primary"
    submitBtn.innerText = "SUBMIT"
    submitBtn.type = "submit"

    btnContainer.append(submitBtn, closeBtn)

    form.append(valueLabel, input, btnContainer)
    form.addEventListener("submit", this.submitHandler.bind(this))
    form.addEventListener("reset", this.closeModal.bind(this))

    return form
  }
  closeModal() {
    this.dialogInputEl.value = ""

    this.dialogInputEl.classList.remove("error")
    this.dialogEl.close()
  }
  generateDialogEl() {
    const dialog = document.createElement("dialog")
    dialog.className = "dialog"

    const dialogTitle = document.createElement("h5")
    dialogTitle.innerText = "This is a dialog"

    const form = this.generateForm()
    dialog.append(dialogTitle, form)

    return dialog
  }
}
