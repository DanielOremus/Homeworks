class Star {
  constructor(
    starImgSrc,
    startWidthPx,
    maxScale,
    scaleStep,
    interval,
    containerSelector
  ) {
    this.imgSrc = starImgSrc
    this.startWidthPx = startWidthPx
    this.maxScale = maxScale
    this.growingStep = scaleStep
    this.growingInterval = interval
    this.container = this.getContainer(containerSelector)
    this.currentScale = 100
  }
  getContainer(containerSelector) {
    return document.querySelector(containerSelector)
  }
  render() {
    if (!this.img) {
      const img = document.createElement("img")
      img.setAttribute("src", this.imgSrc)
      img.style.position = "fixed"
      img.style.width = this.startWidthPx + "px"
      this.container.append(img)
      this.img = img
    }
    this.img.style.left =
      this.getRandomPos(window.innerWidth, this.startWidthPx) + "%"
    this.img.style.top =
      this.getRandomPos(window.innerHeight, this.startWidthPx) + "%"
  }
  start() {
    this.render()
    this.myIntervalId = setInterval(() => {
      this.img.style.scale = this.currentScale + this.growingStep + "%"
      this.currentScale += this.growingStep
      if (this.currentScale > this.maxScale) {
        this.reset()
        this.render()
      }
    }, this.growingInterval)
  }
  stop() {
    clearInterval(this.myIntervalId)
  }
  reset() {
    this.img.style.scale = "100%"
    this.currentScale = 100
  }

  getRandomPos(windowInnerSize, initialImageSize) {
    const maxImageSizePx = (initialImageSize * this.maxScale) / 100

    const deltaSize =
      maxImageSizePx !== initialImageSize
        ? (maxImageSizePx - initialImageSize) / 2
        : 1

    const min = (deltaSize / windowInnerSize) * 100

    const stepsToProceed = maxImageSizePx / deltaSize
    const max = 100 - (stepsToProceed - 1) * min

    return min + Math.floor(Math.random() * (max - min + 1))
  }
}
