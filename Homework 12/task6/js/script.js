window.onload = () => onMounted()

function onMounted() {
  const array = ["Sarah", "Mykola", "Olexandr", "Vitaliy", "Ada", "Adam"]
  console.log(array)

  selectionSortByElementLength(array)
  console.log(`Відсортований масив: ${JSON.stringify(array)}`)

  console.log(binarySearch(array, 5))
}

// function insertionSort(array) {
//   for (let k = 1; k < array.length; k++) {
//     const key = array[k].length
//     let i = k - 1
//     while (i >= 0 && array[i].length > key) {
//       array[i + 1] = array[i]
//       i--
//     }
//     array[i + 1] = key
//   }
//   return array
// }

function selectionSortByElementLength(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let indexOfMinElementLength = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[indexOfMinElementLength].length > array[j].length)
        indexOfMinElementLength = j
    }
    if (i !== indexOfMinElementLength) {
      const temp = array[indexOfMinElementLength]
      array[indexOfMinElementLength] = array[i]
      array[i] = temp
    }
  }
  return array
}
function binarySearch(sortedArray, searchLength) {
  let startPos = 0
  let endPos = sortedArray.length - 1
  while (startPos <= endPos) {
    const middle = Math.floor((startPos + endPos) / 2)
    if (searchLength === sortedArray[middle].length) return middle
    if (searchLength > sortedArray[middle].length) {
      startPos = middle + 1
    }
    if (searchLength < sortedArray[middle].length) endPos = middle - 1
  }
  return -1
}
