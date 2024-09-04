window.onload = () => onMounted()

function onMounted() {
  const array = [
    "Anna",
    "Niko",
    "Julia",
    "Andriy",
    "Ivan",
    "Sarah",
    "Petro",
    "Robert",
    "Olga",
  ]
  console.log(array)

  insertionSort(array)
  console.log(`Відсортований масив: ${JSON.stringify(array)}`)

  console.log(binarySearch(array, "Olga"))
}

function insertionSort(array) {
  for (let k = 1; k < array.length; k++) {
    const key = array[k]
    let i = k - 1
    while (i >= 0 && array[i] > key) {
      array[i + 1] = array[i]
      i--
    }
    array[i + 1] = key
  }
  return array
}
function binarySearch(sortedArray, searchElement) {
  searchElement = searchElement.toString() //Страхування від нескінченного виконання циклу
  let startPos = 0
  let endPos = sortedArray.length - 1
  while (startPos <= endPos) {
    const middle = Math.floor((startPos + endPos) / 2)
    if (searchElement === sortedArray[middle]) return middle
    if (searchElement > sortedArray[middle]) {
      startPos = middle + 1
    }
    if (searchElement < sortedArray[middle]) endPos = middle - 1
  }
  return -1
}
