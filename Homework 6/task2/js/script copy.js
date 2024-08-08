function onStart(maxNum) {
  let array = generateArray(maxNum)
  let userAns
  let result
  do {
    const middleIndex = getArrayMiddleIndex(array)
    userAns = getUserAns(array[middleIndex], ">")

    if (userAns) {
      array = cutArray(array, middleIndex + 1, array.length)
    } else array = cutArray(array, 0, middleIndex + 1)
    console.log(array)

    if (array.length >= 2) {
      continue
    } else {
      console.log("1 element left")
      userAns = getUserAns(array[middleIndex], "=")
      if (userAns) {
        result = "guessed"
      } else result = "manipulation"
    }
  } while (array.length > 1)
  console.log(result)

  displayMessage(getResultMessage(result))
}
function getArrayMiddleIndex(array) {
  let middleIndex
  array.length % 2 !== 0
    ? (middleIndex = (array.length - 1) / 2)
    : (middleIndex = array.length / 2)
  console.log(middleIndex)

  return middleIndex - 1
}
function cutArray(array, startPos, endPos) {
  return array.slice(startPos, endPos)
}
function generateArray(maxNum) {
  let arr = []
  for (let i = 1; i <= maxNum; i++) {
    arr.push(i)
  }
  return arr
}
function getUserAns(middleNumber, logicOperation) {
  return confirm(`Ваше число ${logicOperation} ${middleNumber}?`)
}
function validateOnStart() {
  const maxNum = parseInt(document.querySelector("input").value)
  isNaN(maxNum) || maxNum <= 1
    ? displayMessage(getResultMessage())
    : onStart(maxNum)
}

function getResultMessage(result) {
  let text
  switch (result) {
    case "guessed":
      text = "Ура, я знайшов"
      break
    case "manipulation":
      text = "Щось ви мухлюєте, грайте чесно!"
      break

    default:
      text = "Помилка, введіть коректне число!"
      break
  }
  return text
}
function displayMessage(message) {
  alert(message)
}
