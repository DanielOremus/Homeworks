class Banner {
  constructor(data, containerSelector) {
    this.banners = data
    this.container = document.querySelector(containerSelector)
  }
  //Метод випадкового вибору об’єкта (графічного зображення та посилання)
  getRandomBanner() {
    const index = Math.floor(Math.random() * this.banners.length)
    return this.banners[index]
  }
  generateBannerCard(bannerObj) {
    const banner = document.createElement("div")
    banner.setAttribute(
      "class",
      "d-inline-block px-4 pt-2 pb-4 border text-center rounded-4"
    )
    const title = document.createElement("p")
    title.setAttribute("class", "fw-medium")
    title.textContent = bannerObj.title
    const img = document.createElement("img")
    img.setAttribute("src", bannerObj.imgSrc)
    img.onclick = () => (window.location.href = bannerObj.url)
    banner.append(title, img)
    return banner
  }
  //Метод виведення випадкового банера
  displayRandomBanner() {
    const bannerObj = this.getRandomBanner()
    const banner = this.generateBannerCard(bannerObj)
    this.container.innerText = ""
    this.container.append(banner)
  }
}
