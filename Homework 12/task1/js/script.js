window.onload = () => onMounted()

function onMounted() {
  const array = generateArray()
  console.log(array)

  console.log(bubbleSort([...array]))
}
function bubbleSort(array) {
  let rightIndex = array.length - 1
  let swapCount = 0
  let checkCount = 0
  let changed
  do {
    changed = false
    for (let i = 1; i <= rightIndex; i++) {
      checkCount++
      if (array[i - 1] > array[i]) {
        swapCount++
        const temp = array[i]
        array[i] = array[i - 1]
        array[i - 1] = temp
        changed = true
      }
    }
    rightIndex--
  } while (changed)
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
