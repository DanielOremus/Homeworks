function getUserMoney() {
  const userMoney = parseFloat(document.querySelector("input").value)
  if (isNaN(userMoney) || userMoney < 0) {
    throw new Error("Перевірте правильність числа")
  }
  return userMoney
}

function getAllProducts() {
  return [
    {
      title: "Хліб білий",
      price: 14.99,
    },
    {
      title: "Круасан з шоколадом",
      price: 18.5,
    },
    {
      title: "Яйце куряче",
      price: 3,
    },
    {
      title: "Молоко 2.6% 500г",
      price: 18.99,
    },
    {
      title: "Масло 200г",
      price: 49.99,
    },
  ]
}
function getAvailableProducts(userMoney) {
  const products = getAllProducts()
  const availableProducts = products.reduce((accumulator, obj) => {
    if (obj.price <= userMoney) accumulator.push(obj.title)
    return accumulator
  }, [])
  if (!availableProducts.length) {
    return null
  }
  return availableProducts
}

function getResultMessage(userMoney) {
  return `Ми маємо ці товари: ${getAllProducts()
    .map((el) => `${el.title} - ${el.price} грн`)
    .join(", ")}.\nВи можете купити: ${
    getAvailableProducts(userMoney) || "нічого"
  }`
}
function displayText(text) {
  alert(text)
}

function onBtnClick() {
  let userMoney
  try {
    userMoney = getUserMoney()
    displayText(getResultMessage(userMoney))
  } catch (error) {
    displayText(error.message)
  }
}
