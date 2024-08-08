function onStart(maxNum) {
  let array = generateArray(maxNum)
  let resultMsg
  let middleIndex,
    startPos = 0,
    endPos = array.length - 1

  while (endPos - startPos >= 1) {
    middleIndex = getArrayMiddleIndex(startPos, endPos)

    let userAns = getUserAns(array[middleIndex], "=")
    if (userAns) {
      resultMsg = "found"
      break
    } else {
      if (endPos - startPos === 1) {
        middleIndex = endPos
        break
      }
      userAns = getUserAns(array[middleIndex], ">")

      if (userAns) {
        startPos = middleIndex + 1
      } else endPos = middleIndex - 1
      if (endPos === startPos) {
        middleIndex = startPos
        break
      }
    }
  }
  console.log(array[middleIndex])
  resultMsg = "found"

  displayMessage(getResultMessage(resultMsg, array[middleIndex]))
}
function getArrayMiddleIndex(start, end) {
  const index = Math.floor((end + start) / 2)
  console.log(index)

  return index
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

function getResultMessage(result, number) {
  let text
  switch (result) {
    case "found":
      text = `Ура, ваше число ${number}`
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
