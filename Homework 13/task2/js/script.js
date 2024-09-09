function onBtnClick() {
  const array = ["Olga", "Petro", "Ivan", "Mykola"]
  const permutations = getAllPermutations(array)

  const container = document.querySelector(".result-container")
  permutations.forEach((el, i) => {
    const div = document.createElement("div")
    div.innerText = `${i + 1}. ${el.join(", ")}`
    container.append(div)
  })
}

function getAllPermutations(array) {
  const resultArray = []

  function permute(arrToPermute, step) {
    if (step === arrToPermute.length) {
      resultArray.push([...arrToPermute])
    } else {
      for (let i = step; i < arrToPermute.length; i++) {
        swap(arrToPermute, step, i)
        permute(arrToPermute, step + 1)
        swap(arrToPermute, i, step)
      }
    }
  }
  permute(array, 0)
  return resultArray
}
function swap(array, i, j) {
  const temp = array[i]
  array[i] = array[j]
  array[j] = temp
}
