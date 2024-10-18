function swap(i, j, array) {
  const temp = array[i]
  array[i] = array[j]
  array[j] = temp
}

function bubbleSort(array) {
  const startTime = new Date()
  const arrayCopy = [...array]
  let isChanged = true
  while (isChanged) {
    isChanged = false
    for (let i = 0; i < arrayCopy.length - 1; i++) {
      if (arrayCopy[i] > arrayCopy[i + 1]) {
        isChanged = true
        swap(i, i + 1, arrayCopy)
      }
    }
  }
  const endTime = new Date()
  return { sortedArray: arrayCopy, duration: endTime - startTime }
}

function insertionSort(array) {
  const startTime = new Date()
  const arrayCopy = [...array]
  for (let i = 1; i < array.length; i++) {
    let j = i - 1
    const key = array[i]
    while (j >= 0 && key < arrayCopy[j]) {
      arrayCopy[j + 1] = arrayCopy[j]

      j--
    }
    arrayCopy[j + 1] = key
  }
  const endTime = new Date()
  return { sortedArray: arrayCopy, duration: endTime - startTime }
}

function generateArray(arrayLength, min, max) {
  const array = []
  for (let i = 0; i < arrayLength; i++) {
    array.push(min + Math.floor(Math.random() * (max - min + 1)))
  }
  return array
}

function onCompare(initialArray, displayContainer) {
  const { sortedArray, duration } = insertionSort(initialArray)

  console.log("sortedArray")
  console.log(sortedArray)

  displayContainer.innerText = `Bubble Sort: ${
    bubbleSort(initialArray).duration
  }ms\nInsertion Sort: ${duration}ms`
}

window.onload = () => {
  const initialArray = generateArray(1000, 1, 800)

  const compareBtn = document.querySelector("button")
  const textContainer = document.querySelector(".durationContainer")

  compareBtn.onclick = onCompare.bind(null, initialArray, textContainer)
}
