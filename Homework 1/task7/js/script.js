function getProductTotalPrice(productPrice, productCount) {
  return productPrice * productCount
}

function getTotalSum(priceArray) {
  return priceArray.reduce((accumulator, el) => accumulator + el, 0)
}

function showTable() {
  removeTable()

  const table = document.createElement("table")
  table.setAttribute("border", "2px")

  const thArr = ["№", "Варість за шт.", "Кількість", "Загальна вартість"]
  const headerRow = document.createElement("tr")

  for (let i = 0; i < thArr.length; i++) {
    const th = document.createElement("th")
    th.innerText = thArr[i]
    headerRow.appendChild(th)
  }

  table.appendChild(headerRow)

  let priceArray = []
  for (let i = 0; i < 3; i++) {
    const tr = document.createElement("tr")
    const productDiv = document.getElementsByClassName("product")[i]
    const productPrice = parseFloat(
      productDiv.querySelectorAll("input")[0].value
    )
    const productCount = parseInt(productDiv.querySelectorAll("input")[1].value)

    priceArray.push(getProductTotalPrice(productPrice, productCount))

    for (let j = 0; j < thArr.length; j++) {
      const td = document.createElement("td")

      switch (j) {
        case 0:
          td.innerText = i + 1
          break
        case 1:
          td.innerText = productPrice
          break
        case 2:
          td.innerText = productCount
          break
        case 3:
          td.innerText = priceArray[i]
          break
      }
      tr.appendChild(td)
    }
    table.appendChild(tr)
  }

  const totalSumRow = document.createElement("tr")
  const totalSumTd1 = document.createElement("td")
  const totalSumTd2 = document.createElement("td")
  totalSumTd2.setAttribute("colspan", "3")
  totalSumTd1.innerText = "Всього"
  totalSumTd2.innerText = getTotalSum(priceArray)
  totalSumRow.append(totalSumTd1, totalSumTd2)
  table.appendChild(totalSumRow)

  document.getElementById("table-container").appendChild(table)
}

function removeTable() {
  document.getElementById("table-container").innerText = ""
}
