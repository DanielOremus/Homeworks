window.onload = () => onMounted()

function onMounted() {
  const array = generateArray()
  console.log(array)

  console.log(insertionSort([...array]))
}
function insertionSort(array) {
  let checkCount = 0
  let swapCount = 0
  for (let i = 1; i < array.length; i++) {
    const key = array[i]
    let j = i - 1
    checkCount++
    while (j >= 0 && array[j] > key) {
      checkCount++
      swapCount++
      array[j + 1] = array[j]
      j--
    }

    array[j + 1] = key
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
