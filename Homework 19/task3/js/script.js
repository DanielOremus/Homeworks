window.onload = () => {
  const listContainer = document.querySelector(".list-container")

  //*Динамічне генерування списків
  for (let i = 0; i < 5; i++) {
    const liNumber = generateRandomNumber(1, 10)
    listContainer.append(generateList(liNumber))
  }

  document.querySelector("button").onclick = paintLists.bind(
    null,
    listContainer.children
  )
}
function paintLists(markedLists) {
  for (const list of markedLists) {
    list.style.backgroundColor = list.children.length % 2 ? "red" : "green"
  }
}

function generateList(liNumber) {
  const ol = document.createElement("ol")
  for (let i = 0; i < liNumber; i++) {
    const li = document.createElement("li")
    li.innerText = generateRandomNumber()
    ol.append(li)
  }
  return ol
}
function generateRandomNumber(min = 1, max = 100) {
  return min + Math.floor(Math.random() * (max - min + 1))
}
