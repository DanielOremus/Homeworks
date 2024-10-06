class Cart {
  constructor(containerSelector, checkoutSelector) {
    this.productList = []
    this.container = this.getContainer(containerSelector)
    this.container.addEventListener(
      "cart_operation",
      this.onCartManipulation.bind(this)
    )
    this.checkoutContainer = this.getContainer(checkoutSelector)
    this.render()
  }

  //Знаходження контейнера для перехоплення подій
  getContainer(containerSelector) {
    return document.querySelector(containerSelector)
  }
  render() {
    this.container.innerText = ""
    this.productList.forEach((product) => {
      const cartCard = this.generateProductCard(product)
      this.container.append(cartCard)
    })
    this.updateTotalSumText(this.getTotalCartSum())
  }
  //Знаходження продукту за id
  findById(id) {
    const productObj = this.productList.find((el) => el.id === id)
    if (!productObj) return null
    return productObj
  }

  //Додавання екземпляру Product в корзину
  addToCart(obj) {
    const existProduct = this.findById(obj.id)
    if (existProduct) {
      existProduct.cartQuantity++
    } else {
      obj.cartQuantity = 1
      this.productList.push(obj)
    }
    this.render()
  }

  //Видалення з корзини за id
  deleteFromCart(id) {
    const prodIndex = this.productList.findIndex((el) => el.id === id)
    if (prodIndex === -1) throw new Error("Failed to delete!")
    this.productList.splice(prodIndex, 1)
    this.render()
    // this.productList = this.productList.filter((el) => el.id !== id)
  }

  //Знаходження за id та зміна кількості продукту в корзині
  findByIdAndUpdateQuantity(id, deltaQ) {
    const productObj = this.findById(id)
    const newQuantity = productObj.cartQuantity + deltaQ

    if (newQuantity <= 0)
      throw new RangeError("Failed to update!", { cause: "Quantity equals 0" })

    productObj.cartQuantity = newQuantity
    console.log(productObj.cartQuantity)
    this.render()
  }

  //Генерація кнопки для операцій над продуктом в корзині
  generateOperationBtn(title) {
    const btn = document.createElement("button")
    btn.className = "btn btn-primary btn-sm"
    btn.innerText = title
    return btn
  }

  //Генерація картки (рядка) продукта в корзині
  generateProductCard(productObj) {
    const card = document.createElement("div")
    card.className = "card"

    const img = document.createElement("img")
    img.className = "cardImg"
    img.setAttribute("src", productObj.imgSrc)

    const title = document.createElement("span")
    title.className = "cardTitle"
    title.innerText = productObj.title

    const incrementBtn = this.generateOperationBtn("+")
    incrementBtn.onclick = this.actionMethod.bind(
      card,
      "increment",
      productObj.id
    )

    const decrementBtn = this.generateOperationBtn("-")
    decrementBtn.onclick = this.actionMethod.bind(
      card,
      "decrement",
      productObj.id
    )

    const deleteBtn = this.generateOperationBtn("X")
    deleteBtn.onclick = this.actionMethod.bind(card, "delete", productObj.id)

    const productQuantity = document.createElement("span")
    productQuantity.className = "cardQuantity"
    productQuantity.innerText = productObj.cartQuantity

    const price = document.createElement("span")
    price.className = "cardPrice"
    price.innerText = `Price: ${productObj.getTotalSum(
      productObj.cartQuantity
    )}₴`

    card.append(
      img,
      title,
      decrementBtn,
      productQuantity,
      incrementBtn,
      price,
      deleteBtn
    )

    return card
  }

  //Створення кастомної події при кліку на кнопку з операцією
  actionMethod(actionType, prodId) {
    const myEvent = new CustomEvent("cart_operation", {
      bubbles: true,
      detail: {
        type: actionType,
        prodId,
      },
    })
    this.dispatchEvent(myEvent)
  }

  //Функція колбек для події кастомної події
  onCartManipulation(e) {
    const prodId = e.detail.prodId
    const cardEl = e.target

    switch (e.detail.type) {
      case "increment":
        this.findByIdAndUpdateQuantity(prodId, 1, cardEl)
        break
      case "decrement":
        {
          try {
            this.findByIdAndUpdateQuantity(prodId, -1, cardEl)
          } catch (error) {
            if (error instanceof RangeError) {
              this.deleteFromCart(prodId, cardEl)
            } else console.log(error.message)
          }
        }
        break
      case "delete":
        this.deleteFromCart(prodId, cardEl)
        break
    }
  }
  updateTotalSumText(sum) {
    this.checkoutContainer.innerText = `Checkout: ${sum}₴`
  }
  getTotalCartSum() {
    return this.productList.reduce(
      (accumulator, el) => el.getTotalSum(el.cartQuantity) + accumulator,
      0
    )
  }
}
