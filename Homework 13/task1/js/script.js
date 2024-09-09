function onBtnClick() {
  const array = [2, 5, 9]
  const subsets = getAllSubsets(array)

  const container = document.querySelector(".result-container")
  subsets.forEach((el, i) => {
    const div = document.createElement("div")
    div.innerText = `${i + 1}. [${el.join(", ")}]`
    container.append(div)
  })
}

function getAllSubsets(array) {
  const resultArray = []

  function subset(array, step, currentSubset) {
    if (step === array.length) {
      resultArray.push([...currentSubset])
    } else {
      subset(array, step + 1, currentSubset)
      currentSubset.push(array[step])
      subset(array, step + 1, currentSubset)

      currentSubset.pop()
    }
  }
  subset(array, 0, [])
  return resultArray
}
