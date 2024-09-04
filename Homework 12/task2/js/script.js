window.onload = () => onMounted()

function onMounted() {
  const array = generateArray()
  console.log(array)

  console.log(cocktailSort([...array]))
}
function cocktailSort(array) {
  let rightIndex = array.length - 1
  let leftIndex = 1
  let swapCount = 0
  let checkCount = 0
  while (leftIndex < rightIndex) {
    for (let i = leftIndex; i <= rightIndex; i++) {
      checkCount++
      if (array[i - 1] > array[i]) {
        swapCount++
        const temp = array[i - 1]
        array[i - 1] = array[i]
        array[i] = temp
      }
    }
    rightIndex--

    for (let i = rightIndex; i >= leftIndex; i--) {
      checkCount++
      if (array[i] < array[i - 1]) {
        swapCount++
        const temp = array[i - 1]
        array[i - 1] = array[i]
        array[i] = temp
      }
    }
    leftIndex++
  }
  console.log(`Кількість обмінів: ${swapCount}`)
  console.log(`Кількість перевірок: ${checkCount}`)
  return array
}
function generateArray(length = 30) {
  return new Array(length).fill(0).map((el) => generateNumber())
}

function generateNumber(min = 1, max = 50) {
  return min + Math.floor(Math.random() * (max - min + 1))
}
