//Product Card Generator
class Card {
  constructor(foodObj, cssObj) {
    this.title = foodObj.title
    this.imageSrc = foodObj.image
    this.cssObj = cssObj
  }
  render() {
    const card = document.createElement("div")
    card.className = this.cssObj.foodCard

    const imageEl = document.createElement("img")
    imageEl.className = this.cssObj.foodCardImg
    imageEl.src = this.imageSrc
    imageEl.alt = "Food Image"

    const foodTitle = document.createElement("span")
    foodTitle.className = this.cssObj.foodCardLabel
    foodTitle.innerText = this.title

    card.append(imageEl, foodTitle)

    return card
  }
}
