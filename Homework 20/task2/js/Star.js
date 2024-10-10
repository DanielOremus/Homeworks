class Star {
  constructor(
    starImgSrc,
    initialWidthPx,
    finalScale,
    stepPercent,
    interval,
    containerSelector
  ) {
    this.imgSrc = starImgSrc
    this.initialWidth = initialWidthPx
    this.finalScale = finalScale
    this.growingStep = stepPercent / 100
    this.growingInterval = interval
    this.container = this.getContainer(containerSelector)
    this.currentScale = 1
  }
  getContainer(containerSelector) {
    return document.querySelector(containerSelector)
  }
  render() {
    if (!this.img) {
      const img = document.createElement("img")
      img.setAttribute("src", this.imgSrc)
      img.style.position = "fixed"
      img.style.width = this.initialWidth + "px"
      this.container.append(img)
      this.img = img
    }
    this.img.style.left =
      this.getRandomPos(window.innerWidth, this.initialWidth) + "px"
    this.img.style.top =
      this.getRandomPos(window.innerHeight, this.initialWidth) + "px"
  }
  start() {
    this.render()
    this.myIntervalId = setInterval(() => {
      if (this.currentScale >= this.finalScale) {
        this.reset()
        this.render()
      } else {
        this.currentScale += this.growingStep
        this.updateImgScale()
      }
    }, this.growingInterval)
  }
  updateImgScale() {
    this.img.style.scale = this.currentScale
  }
  stop() {
    clearInterval(this.myIntervalId)
  }
  reset() {
    this.currentScale = 1
    this.updateImgScale()
  }
  getRandomPos(windowInnerSize, initialImageSize) {
    const finalImageSize = initialImageSize * this.finalScale
    const deltaSize = finalImageSize - initialImageSize

    const min = deltaSize / 2
    const max = windowInnerSize - this.finalScale * 0.75 * initialImageSize

    return min + Math.floor(Math.random() * (max - min + 1))
  }
}
