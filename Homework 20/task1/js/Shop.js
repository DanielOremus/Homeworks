class Shop {
  constructor(productList, shopSelector, cartSelector, checkoutSelector) {
    this.productList = productList
    this.container = this.getContainer(shopSelector)
    this.cart = new Cart(cartSelector, checkoutSelector)

    this.container.addEventListener("addToCart", this.onAddToCart.bind(this))
  }
  getContainer(containerSelector) {
    return document.querySelector(containerSelector)
  }
  render() {
    this.container.innerText = ""
    this.productList.forEach((product) => {
      const card = this.generateProductCard(product)
      this.container.append(card)
    })
  }
  generateProductCard(productObj) {
    const card = document.createElement("div")
    card.className = "card"

    const img = document.createElement("img")
    img.className = "cardImg"
    img.setAttribute("src", productObj.imgSrc)

    const title = document.createElement("title")
    title.className = "cardTitle"
    title.innerText = productObj.title

    const price = document.createElement("span")
    price.className = "cardPrice"
    price.innerText = productObj.price + "₴"

    const btn = document.createElement("button")
    btn.className = "addToCardBtn btn btn-primary"
    btn.innerText = "Add to Cart"
    btn.onclick = this.dispatchAddEvent.bind(btn, productObj)

    card.append(img, title, price, btn)
    return card
  }
  dispatchAddEvent(productObj) {
    const myEvent = new CustomEvent("addToCart", {
      bubbles: true,
      detail: {
        productObj,
      },
    })

    this.dispatchEvent(myEvent)
  }
  onAddToCart(e) {
    this.cart.addToCart(e.detail.productObj)
  }
}
