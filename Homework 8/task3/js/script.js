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

function isNamesNumberCorrect(number) {
  return number > 0
}

function generateNameInputs() {
  const namesNumber = parseInt(document.querySelector("input").value)
  if (isNamesNumberCorrect(namesNumber)) {
    const previousContainer = document.querySelector(".names-container")
    if (previousContainer) {
      previousContainer.remove()
    }

    const row = generateRow("names-container row mt-4 flex-column gy-3")
    for (let index = 1; index <= namesNumber; index++) {
      const col = generateCol("col-4")
      const label = generateLabel(`Ім'я ${index} учня`)
      const input = generateInput("user-name form-control")
      col.append(label, input)
      row.appendChild(col)
    }
    getContainer().appendChild(row)
  } else throw new Error("Введіть коректну кількість імен")
}

function getIvansNumber(array) {
  return array.reduce(
    (accumulator, el) => (el === "ivan" ? accumulator + 1 : accumulator),
    0
  )
}

function ivanNumberOnClick() {
  const names = [...document.querySelectorAll(".user-name")].map((el) =>
    el.value.toLowerCase()
  )

  const ivansNumber = getIvansNumber(names)
  showResult(ivansNumber)
}
function showResult(ivansNumber) {
  alert(`Кількість Іванів: ${ivansNumber}`)
}

window.onload = () => {
  displayUserSection()
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
          generateNameInputs()
        } catch (e) {
          alert(e.message)
        }
      },
    },
    {
      title: "Ivans Number",
      classes: "btn btn-primary",
      action: () => ivanNumberOnClick(),
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

  const label = generateLabel("Кількість імен")
  const input = generateInput("form-control")

  col1.append(label, input)

  for (const obj of btnArray) {
    col2.appendChild(generateButton(obj))
  }
  row.append(col1, col2)
  container.appendChild(row)
}
