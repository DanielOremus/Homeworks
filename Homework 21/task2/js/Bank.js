class Bank {
  constructor(clientsList) {
    this.clients = clientsList
  }
  generateTextEl(text) {
    const span = document.createElement("span")
    span.innerText = text
    return span
  }
  render() {
    const container = document.createElement("div")
    this.clients.forEach((client) => {
      container.append(this.generateTextEl(client))
    })

    container.append(
      this.generateTextEl(`Total Balance: ${this.getTotalSum()}`)
    )

    return container
  }
  getTotalSum() {
    return this.clients.reduce((accumulator, el) => accumulator + el.Balance, 0)
  }
}
