class Tank {
  constructor(imgConfig, step, interval, containerSelector) {
    this.imgConfig = imgConfig
    this.step = step
    this.interval = interval

    this.container = document.querySelector(containerSelector)
  }
  getRandomXPos() {
    return Math.floor(
      Math.random() * (window.innerWidth - this.imgConfig.width + 1)
    )
  }
  render() {
    if (!this.imgEl) {
      const img = document.createElement("img")
      img.style.width = this.imgConfig.width + "px"
      img.style.height = this.imgConfig.height + "px"

      img.style.position = "fixed"
      this.setInitialPos()
      this.setImgPos(img)

      img.onclick = this.onClickHandler.bind(this)

      this.imgEl = img
      this.container.append(this.imgEl)
    }
    this.updateTankState(true)
  }

  setInitialPos() {
    this.x = this.getRandomXPos()
    this.y = -2 * this.imgConfig.height
  }
  setNewPos() {
    if (this.y > window.innerHeight) {
      this.emitTankEvent("missed")
      this.setInitialPos()
    }
    this.y += this.step
  }
  updateTankState(isAlive) {
    this.isAlive = isAlive
    this.imgEl.src = isAlive ? this.imgConfig.alive : this.imgConfig.destroyed
  }
  onClickHandler() {
    if (!this.isAlive) return false
    this.destroy()
    this.emitTankEvent("destroyed")
  }
  emitTankEvent(type) {
    this.imgEl.dispatchEvent(
      new CustomEvent("tankEvent", {
        bubbles: true,
        detail: {
          type,
        },
      })
    )
  }
  destroy() {
    clearInterval(this.intervalId)
    this.updateTankState(false)

    setTimeout(() => {
      this.resetTank()
      this.start()
    }, 2000)
  }
  start() {
    this.render()
    this.intervalId = setInterval(() => {
      this.animate()
    }, this.interval)
  }
  resetTank() {
    this.updateTankState(true)
    this.setInitialPos()
    this.setImgPos(this.imgEl)
  }
  setImgPos(imgEl) {
    imgEl.style.left = this.x + "px"
    imgEl.style.top = this.y + "px"
  }
  animate() {
    this.setNewPos()
    this.setImgPos(this.imgEl)
  }
}
