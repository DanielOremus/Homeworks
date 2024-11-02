//Home Page Loader

import ComponentLoader from "../utils/ComponentLoader.js"

window.onload = () => {
  ComponentLoader.load([
    "../components/sections/header.html",
    "../components/pages/homeComponent.html",
  ])
}
