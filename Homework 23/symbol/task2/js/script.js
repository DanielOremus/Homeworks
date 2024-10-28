window.onload = () => {
  const productList = [
    new Product("Молоко", 30, 10),
    new Product("Хліб", 15, 20),
    new Product("Яблука", 25, 5),
    new Product("Цукор", 40, 7),
    new Product("Борошно", 35, 12),
    new Product("Картопля", 20, 30),
    new Product("Яйця", 45, 8),
    new Product("Сир", 60, 4),
    new Product("Ковбаса", 100, 3),
    new Product("Чай", 50, 15),
  ]

  const myShop = new Shop(productList)
  renderProdList(productList)
  renderResult(myShop)
}
function renderProdList(productList) {
  let str = "Продукти: "
  for (const product of productList) {
    str += `${product} | `
  }
  document.querySelector(".array-container").innerText = str
}
function renderResult(shopObj) {
  const container = document.querySelector(".results-container")
  for (const product of shopObj) {
    container.innerText += `${product}\n`
  }
}
