class Game {
  constructor(tanksArray, gameContainerSelector) {
    this.tanks = tanksArray
    this.destroyedTanksNumber = 0
    this.missedTanksNumber = 0
    this.container = this.findContainer(gameContainerSelector)
    this.counterEl = this.generateContainer()

    this.updateCounterEl()
    this.container.append(this.counterEl)

    this.container.addEventListener(
      "tankEvent",
      this.tankEventHandler.bind(this)
    )
  }
  findContainer(gameContainerSelector) {
    return document.querySelector(gameContainerSelector)
  }
  generateContainer() {
    const counter = document.createElement("span")
    counter.className = "counter z-2 position-absolute fs-5"
    return counter
  }
  tankEventHandler(e) {
    e.detail.type === "destroyed"
      ? this.destroyedTanksNumber++
      : this.missedTanksNumber++
    this.updateCounterEl()
  }
  updateCounterEl() {
    this.counterEl.innerText = `Destroyed: ${this.destroyedTanksNumber}\nMissed: ${this.missedTanksNumber}`
  }
  startGame() {
    for (let i = 0; i < this.tanks.length; i++) {
      setTimeout(() => {
        this.tanks[i].start()
      }, i * 1000)
    }
  }
}
