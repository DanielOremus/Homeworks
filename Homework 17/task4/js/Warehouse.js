class Warehouse {
  constructor(productList) {
    this.products = [...productList]
  }
  addNewProduct(productObj) {
    this.products.push(productObj)
  }
  dispatchProductById(id, deltaQ) {
    const product = this.products.find((el) => el.id === id)
    if (!product) throw new Error("Такого товару немає")

    product.decreaseQuantity(deltaQ)
  }
  filterByProductTitle(title) {
    return this.products.filter((product) =>
      product.title.toLowerCase().includes(title.toLowerCase())
    )
  }
  filterByCompanyName(name) {
    return this.products.filter(
      ({ manufacturer }) => manufacturer.name === name
    )
  }
}
