async function getData() {
  return fetch("./db.json").then((response) => response.json())
}

window.onload = async () => {
  const data = await getData()
  const cardsContainer = document.querySelector(".card-list")
  for (const cardObj of data) {
    cardsContainer.append(generateCardEl(cardObj))
  }
  cardsContainer.addEventListener("click", onCardClick)
}

function generateCardEl(cardData) {
  const card = document.createElement("div")
  card.className =
    "card-item d-inline-flex flex-column justify-content-center ms-3 p-4"
  const img = document.createElement("img")
  img.style.height = "100px"
  img.className = "align-self-center"
  img.src = cardData.imgSrc

  const title = document.createElement("span")
  title.innerText = cardData.title
  title.className = "mt-2"

  const price = document.createElement("span")
  price.innerText = `${cardData.price} грн`
  price.className = "text-danger mt-1"

  card.append(img, title, price)
  return card
}

function onCardClick(e) {
  const clickedEl = e.target
  const cardItem = clickedEl.closest(".card-item")

  for (const card of cardItem.parentNode.children) {
    if (card.classList.contains("selected")) {
      card.classList.toggle("selected")
      break
    }
  }

  cardItem?.classList.toggle("selected")
}
