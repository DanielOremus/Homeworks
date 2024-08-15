//------------------------------- Генерація розмітки

function generateRow(classes) {
  const row = document.createElement("div")
  row.setAttribute("class", classes)
  return row
}
function generateCol(classes) {
  const col = document.createElement("div")
  col.setAttribute("class", classes)
  return col
}
function generateLabel(text) {
  const label = document.createElement("label")
  label.innerText = text
  return label
}
function generateInput(classes) {
  const input = document.createElement("input")
  input.setAttribute("class", classes)
  return input
}
function generateButton(btnObj) {
  const button = document.createElement("button")
  button.setAttribute("class", btnObj.classes)
  button.innerText = btnObj.title
  button.onclick = btnObj.action
  return button
}
function generateCarInputs() {
  const carNumbersCount = parseInt(document.querySelector("input").value)
  if (isCarNumbersCountCorrect(carNumbersCount)) {
    const previousCarContainer = document.querySelector(
      ".car-numbers-container"
    )
    if (previousCarContainer) {
      previousCarContainer.remove()
    }

    const row = generateRow("car-numbers-container row mt-4 flex-column gy-3")
    for (let index = 1; index <= carNumbersCount; index++) {
      const col = generateCol("col-4")
      const label = generateLabel(`Номер ${index} авто`)
      const input = generateInput("user-car-number form-control")
      col.append(label, input)
      row.appendChild(col)
    }
    getContainer().appendChild(row)
  } else throw new Error("Введіть коректну кількість номерів")
}

function getContainer() {
  return document.querySelector(".container")
}
function displayUserSection() {
  const btnArray = [
    {
      title: "Generate Inputs",
      classes: "btn btn-primary",
      action: () => {
        try {
          generateCarInputs()
        } catch (e) {
          alert(e.message)
        }
      },
    },
    {
      title: "Get Result",
      classes: "btn btn-primary",
      action: () => onGetResult(),
    },
    {
      title: "Go to HW8 Page",
      classes: "btn btn-primary",
      action: () => (window.location.href = "../index.html"),
    },
  ]
  const container = getContainer()
  const row = generateRow("row flex-column gy-3")
  const col1 = generateCol("col-4")
  const col2 = generateCol("col-4 d-flex justify-content-around")

  const label = generateLabel("Кількість номерів")
  const input = generateInput("form-control")

  col1.append(label, input)

  for (const obj of btnArray) {
    col2.appendChild(generateButton(obj))
  }
  row.append(col1, col2)
  container.appendChild(row)
}

window.onload = () => {
  displayUserSection()
}
//---------------------------------------------Основна частина скрипта

function isCarNumbersCountCorrect(number) {
  return number > 0
}

function getUserCarNumbers() {
  const array = [...document.querySelectorAll(".user-car-number")].map((el) =>
    el.value.toLowerCase()
  )
  return array
}

function getNumbersFromACount(array) {
  return array.reduce(
    (accumulator, el) => (el[0] === "a" ? accumulator + 1 : accumulator),
    0
  )
}
function getNumbersWithSameOutsideLetterCount(array) {
  return array.reduce(
    (accumulator, el) =>
      el[0] === el[el.length - 1] ? accumulator + 1 : accumulator,
    0
  )
}
function getNumbersMore5SymbolCount(array) {
  return array.reduce(
    (accumulator, el) => (el.length > 5 ? accumulator + 1 : accumulator),
    0
  )
}

function getResultMessage(array) {
  return `Починаються на букву A ${getNumbersFromACount(array)}.
  Зовнішні літери однакові: ${getNumbersWithSameOutsideLetterCount(array)}.
  Складаються більше ніж з 5 символів: ${getNumbersMore5SymbolCount(array)}.`
}

function onGetResult() {
  const carNumbers = getUserCarNumbers()
  displayMessage(getResultMessage(carNumbers))
}

function displayMessage(text) {
  alert(text)
}
