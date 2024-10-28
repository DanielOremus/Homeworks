import RequestManager from "./RequestManager.js"
import ComponentLoader from "./ComponentLoader.js"

window.onload = () => {
  ComponentLoader.load(["../components/header.html"])
  const searchBtn = document.querySelector(".search-btn")
  const imgEl = document.querySelector(".card-img")
  searchBtn.onclick = onSearch.bind(null, imgEl)
}

async function onSearch(imgEl) {
  const prodsArr = await RequestManager.getRequest()
  console.log(prodsArr[0])

  imgEl.src = prodsArr[0].image
}
function name(params) {}
