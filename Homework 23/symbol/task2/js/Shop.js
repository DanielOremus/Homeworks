class Shop {
  constructor(productList) {
    this.productList = productList
  }
  [Symbol.iterator]() {
    this.currentIndex = 0
    return this
  }
  next() {
    if (this.currentIndex < this.productList.length) {
      const currentProduct = this.productList[this.currentIndex++]
      return {
        done: false,
        value: `${currentProduct.title} - ${currentProduct.TotalPrice}`,
      }
    }
    return { done: true }
  }
}
