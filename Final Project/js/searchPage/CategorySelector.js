//Category Section generator

class CategorySelector {
  constructor(categoriesArr, cssObj) {
    this.categoriesList = categoriesArr
    this.cssObj = cssObj
  }
  onCategorySelected(e) {
    const categoryCard = e.target

    if (!categoryCard.classList.contains("selected")) {
      this.deselectAllCards(categoryCard.parentNode.children)
      categoryCard.classList.toggle("selected")
    }
  }
  deselectAllCards(cardNodes) {
    for (const card of cardNodes) {
      if (card.classList.contains("selected")) card.classList.toggle("selected")
    }
  }
  eventEmitter(eventName, data) {
    console.log(data)

    const event = new CustomEvent(eventName, {
      bubbles: true,
      detail: {
        ...data,
      },
    })

    this.dispatchEvent(event)
  }
  render() {
    const container = document.createElement("aside")
    container.className = this.cssObj.categoryContainer

    container.addEventListener("card-click", this.onCategorySelected.bind(this))

    for (const category of this.categoriesList) {
      container.append(this.generateCategoryEl(category))
    }

    this.container = container
    return container
  }

  generateCategoryEl(categoryObj) {
    const container = document.createElement("div")
    container.className = this.cssObj.categoryEl

    const label = document.createElement("label")
    label.className = this.cssObj.categoryLabel
    label.setAttribute("for", categoryObj.value)
    label.innerText = categoryObj.title

    const img = document.createElement("img")
    img.className = this.cssObj.categoryImg
    img.src = categoryObj.imageSrc
    img.draggable = false

    const radio = document.createElement("input")
    radio.type = "radio"
    radio.name = categoryObj.name
    radio.id = categoryObj.value
    radio.value = categoryObj.value
    // radio.style.opacity = "0"
    radio.style.display = "none"

    label.prepend(img)

    container.append(label, radio)

    container.onclick = this.eventEmitter.bind(container, "card-click", {
      radioEl: container.children[1],
    })

    return container
  }
}
