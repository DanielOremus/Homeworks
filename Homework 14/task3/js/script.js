async function getData() {
  return await fetch("./data.json").then((res) => res.json())
}
//Загальна вартість
function getTotalPrice(array) {
  return array.reduce((accumulator, obj) => accumulator + obj.price, 0)
}
//Кількість продуктів у яких ціна зменшилась
function getDecreasedPriceProductsNumber(array) {
  return array.reduce(
    (accumulator, obj) =>
      obj.price < obj.old_price ? accumulator + 1 : accumulator,
    0
  )
}

//Доступні для продажу продукти
function getAvailableProducts(array) {
  return array.filter((obj) => obj.sell_status === "available")
}

//Кастомний масив об'єктів, що має наступні поля: id, price, old_price, usd_price
function generateCustomArray(array) {
  return array
    .filter((obj) => obj.sell_status === "available")
    .map(({ id, price, old_price, usd_price }) => ({
      id,
      price,
      old_price,
      usd_price,
    }))
}
//Розмітка та технічна частина
function generateLi(classes = "") {
  const li = document.createElement("li")
  li.setAttribute("class", classes)
  return li
}

function generateUl(classes = "") {
  const ul = document.createElement("ul")
  ul.setAttribute("class", classes)
  return ul
}
function addResultToContainer(result, container) {
  const li = generateLi("list-group-item")
  if (!Array.isArray(result)) {
    li.textContent = result
  } else {
    li.classList.add("d-flex")
    li.classList.add("flex-column")
    li.classList.add("gap-4")

    for (const obj of result) {
      const ul = generateUl("list-group")
      for (const key in obj) {
        const subLi = generateLi("list-group-item")
        subLi.textContent = `${key}: ${obj[key]}`
        ul.append(subLi)
      }
      li.append(ul)
    }
  }
  container.append(li)
}

window.onload = async () => {
  const container = document.querySelector(".result-container")
  const products = await getData()

  const totalPrice = getTotalPrice(products)
  addResultToContainer(totalPrice, container)

  const decreasedPriceNumber = getDecreasedPriceProductsNumber(products)
  addResultToContainer(decreasedPriceNumber, container)

  const availableProducts = getAvailableProducts(products)
  addResultToContainer(availableProducts, container)

  const customArray = generateCustomArray(products)
  addResultToContainer(customArray, container)
}
