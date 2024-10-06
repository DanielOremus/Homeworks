const productList = [
  new Product(
    "ASUS TUF Gaming A15 FA507NU Gamer Laptop",
    20000,
    10,
    "./images/asus.png"
  ),
  new Product("Apple MacBook Air 13", 39999, 5, "./images/macbook.png"),
  new Product(
    "Samsung KU6000 LED-Backlit LCD",
    24999,
    7,
    "./images/samsung.png"
  ),
]

window.onload = () => {
  const shop = new Shop(
    productList,
    ".productList .cardList",
    ".cartList .cardList",
    ".totalSum"
  )
  shop.render()
  // cart.addToCart(productList[0])
}
