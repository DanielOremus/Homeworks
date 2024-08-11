function createBanner(bannerObj) {
  const bannerContainer = document.createElement("div")
  bannerContainer.setAttribute(
    "class",
    "banner-container d-flex flex-column w-25"
  )

  const label = document.createElement("label")
  label.innerText = bannerObj.title
  label.setAttribute("class", "text-center h5")
  const a = document.createElement("a")
  a.setAttribute("href", bannerObj.href)
  const img = document.createElement("img")
  img.setAttribute("src", bannerObj.src)
  a.appendChild(img)
  bannerContainer.append(label, a)
  return bannerContainer
}
function displayBanner(bannerElement) {
  const container = document.querySelector(".container")
  container.appendChild(bannerElement)
}
window.onload = () => {
  const bannerObj = {
    title: "Спілі вишні",
    src: "./img/cherry.png",
    href: "https://agro-market.net/ua/catalog/cat/obychnaya_vishnya/",
  }
  displayBanner(createBanner(bannerObj))
}
