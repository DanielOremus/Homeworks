function onBtnClick() {
  const ticTac = [
    ["X", "O", " "],
    [" ", "X", " "],
    ["O", " ", "O"],
  ]
  const emptyCells = getEmptyCells(ticTac)

  const allVariantsArray = getAllVariants(ticTac, emptyCells, 0, [])
  const container = document.querySelector(".result-container")
  for (const variant of allVariantsArray) {
    container.append(generateTable(variant))
  }
}

function generateTable(array) {
  const wrapper = document.createElement("div")
  const table = document.createElement("table")
  wrapper.setAttribute("class", "col-2")
  for (let i = 0; i < array.length; i++) {
    const row = document.createElement("tr")
    for (let j = 0; j < array[i].length; j++) {
      const cell = document.createElement("td")
      cell.innerText = array[i][j]
      row.append(cell)
    }
    table.append(row)
    wrapper.append(table)
  }
  return wrapper
}
function getEmptyCells(array) {
  const emptyCells = []
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === " ") emptyCells.push({ x: i, y: j })
    }
  }
  return emptyCells
}
function getAllVariants(mainArray, emptyCells, step, resArray) {
  if (step < emptyCells.length) {
    const { x, y } = emptyCells[step]
    mainArray[x][y] = "X"
    getAllVariants(mainArray, emptyCells, step + 1, resArray)
    mainArray[x][y] = "O"
    getAllVariants(mainArray, emptyCells, step + 1, resArray)
    mainArray[x][y] = " "
  } else {
    resArray.push(JSON.parse(JSON.stringify(mainArray)))
  }
  return resArray
}
