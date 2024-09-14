window.onload = () => {
  const resultsButton = document.querySelector("button")
  const resultContainer = document.querySelector(".result-container")
  const obj1 = {
    array: [1, 2, 5, 8, 10],
    getSum: function () {
      return this.array.reduce((accumulator, el) => accumulator + el)
    },
  }
  const obj2 = {
    array: [3, 9, 7, 2, 1],
    getProduct: function (startIndex, endIndex) {
      let product = 1
      for (let i = startIndex; i <= endIndex; i++) {
        product *= this.array[i]
      }
      return product
    },
  }
  resultsButton.onclick = getResults.bind(null, obj1, obj2, resultContainer)
}

function getResults(obj1, obj2, container) {
  container.innerText = `Сума 1 масива: ${obj1.getSum()}\n`
  //call
  container.innerText += `Сума 2 масива: ${obj1.getSum.call(obj2)}\n`

  //apply
  //   container.innerText += `Сума 2 масива: ${obj1.getSum.apply(obj2)}\n`

  //apply
  container.innerText += `Добуток 1 масива: ${obj2.getProduct.apply(
    obj1,
    [1, 3]
  )}\n`

  //call
  //   container.innerText += `Добуток 1 масива: ${obj2.getProduct.call(
  //     obj1,
  //     1,
  //     3
  //   )}\n`
  container.innerText += `Добуток 2 масива: ${obj2.getProduct(1, 3)}`
}
