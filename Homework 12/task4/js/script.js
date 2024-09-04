window.onload = () => onMounted()

function onMounted() {
  const array = generateArray()
  console.log(array)

  console.log(bubbleSort([...array]))
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
    console.log(`Етап ${i}: ${JSON.stringify(array)}`)
  }

  console.log(`Кількість обмінів: ${swapCount}`)
  console.log(`Кількість перевірок: ${checkCount}`)
  return array
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
        console.log(`Етап (вліво): ${JSON.stringify(array)}`)
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
        console.log(`Етап (вправо): ${JSON.stringify(array)}`)
      }
    }
    leftIndex++
  }
  console.log(`Кількість обмінів: ${swapCount}`)
  console.log(`Кількість перевірок: ${checkCount}`)
  return array
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
        console.log(`Етап: ${JSON.stringify(array)}`)
      }
    }
    rightIndex--
  } while (changed)
  console.log(`Кількість обмінів: ${swapCount}`)
  console.log(`Кількість перевірок: ${checkCount}`)

  return array
}
function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) minIndex = j
    }
    if (i !== minIndex) {
      const temp = array[i]
      array[i] = array[minIndex]
      array[minIndex] = temp
      console.log(`Етап ${i + 1}: ${JSON.stringify(array)}`)
    }
  }
  return array
}
function generateArray(length = 5) {
  return new Array(length).fill(0).map((el) => generateNumber())
}

function generateNumber(min = 1, max = 50) {
  return min + Math.floor(Math.random() * (max - min + 1))
}
