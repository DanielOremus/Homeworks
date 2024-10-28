import ComponentLoader from "../ComponentLoader.js"

window.onload = () => {
  ComponentLoader.load([
    "../components/sections/header.html",
    "../components/pages/homeComponent.html",
    "../components/sections/footer.html",
  ])
}
