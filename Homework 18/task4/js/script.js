window.onload = () => {
  const pageContainer = document.querySelector(".container")
  const wishList = [
    "Вивчити нову мову",
    "Стрибнути з парашутом",
    "Написати книгу",
    "Побачити північне сяйво",
    "Створити власний бізнес",
    "Навчитися готувати страви високої кухні",
    "Зустріти світанок на горі",
    "Навчитися грати на гітарі",
  ]
  const randWishes = generateRandomWishList(wishList, 3)
  const section = generateSection(randWishes, "wishes")
  pageContainer.append(section)
}

function generateRandomNumber(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1))
}
function generateRandomWishList(wishList, number) {
  const array = []
  for (let i = 0; i < number; i++) {
    let currentWish
    do {
      const randIndex = generateRandomNumber(0, wishList.length - 1)
      currentWish = wishList[randIndex]
    } while (array.includes(currentWish))
    array.push(currentWish)
  }
  return array
}
function generateSection(randWishes, containerClass) {
  const container = generateDiv(`${containerClass} fs-5`)
  for (const wish of randWishes) {
    const div = generateDiv()
    div.innerText = wish
    container.append(div)
  }
  return container
}
function generateDiv(classesRow) {
  const div = document.createElement("div")
  if (classesRow) div.className = classesRow
  return div
}
