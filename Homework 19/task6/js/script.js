function addItemsToList(listContainer, namesArray, cssObj) {
  for (const name of namesArray) {
    const listItem = generateNameEl(name, cssObj)
    listContainer.append(listItem)
  }
}
function generateNameEl(name, cssObj) {
  const nameContainer = document.createElement("div")
  nameContainer.className = cssObj.item

  const title = document.createElement("span")
  title.innerText = name

  const btn = document.createElement("button")
  btn.innerText = "->"
  btn.className = cssObj.button
  btn.onclick = onMoveAction.bind(btn, "select", nameContainer)

  nameContainer.append(title, btn)

  return nameContainer
}

function generateSection(textTitle, listEl, cssObj) {
  const div = document.createElement("div")
  div.className = cssObj.section
  const title = document.createElement("span")
  title.innerText = textTitle

  div.append(textTitle, listEl)
  return div
}

function generateEmptyList(cssObj, customClasses) {
  const div = document.createElement("div")
  div.className = `${customClasses} ${cssObj.list}`
  return div
}

function onMoveAction(actionType, item) {
  const moveEvent = new CustomEvent("move_sportsman", {
    bubbles: true,
    detail: {
      type: actionType,
      item,
    },
  })
  this.dispatchEvent(moveEvent)
}

function onMoveSportsman(e) {
  const clickedButton = e.target
  let targetUl

  if (e.detail.type === "select") {
    targetUl = document.querySelector(".selected")

    clickedButton.innerText = "<-"
    clickedButton.onclick = onMoveAction.bind(
      clickedButton,
      "deselect",
      e.detail.item
    )
  } else {
    targetUl = document.querySelector(".available")

    clickedButton.innerText = "->"
    clickedButton.onclick = onMoveAction.bind(
      clickedButton,
      "select",
      e.detail.item
    )
  }

  targetUl.append(e.detail.item)
}

window.onload = () => {
  const listsContainer = document.querySelector(".lists")
  const names = ["Olya", "Daniel", "Petro", "Ivan"]
  const cssObj = {
    list: "list border rounded p-2 d-flex flex-column gap-3",
    item: "list-item d-flex p-2 justify-content-between border rounded",
    button: "btn btn-primary btn-sm",
    section: "col-4",
  }

  const list1 = generateEmptyList(cssObj, "available")
  const section1 = generateSection("Загальний список", list1, cssObj)
  addItemsToList(list1, names, cssObj)

  const list2 = generateEmptyList(cssObj, "selected")
  const section2 = generateSection("Обрані до змагання", list2, cssObj)
  addItemsToList(list2, [], cssObj)

  listsContainer.append(section1, section2)

  listsContainer.addEventListener("move_sportsman", onMoveSportsman)
}
