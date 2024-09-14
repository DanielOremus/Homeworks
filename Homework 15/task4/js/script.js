async function getData() {
  return await fetch("./data.json").then((data) => data.json())
}

window.onload = async () => {
  const bannersList = await getData()

  const bannerObjFromClass = new Banner(bannersList, ".banner-container")
  const displayBtn = document.querySelector("button")
  displayBtn.onclick = () => bannerObjFromClass.displayRandomBanner()
}
