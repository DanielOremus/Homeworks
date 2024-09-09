function onBtnClick() {
  const boysArray = ["Petro", "Ivan", "Daniel"]
  const girlsArray = ["Nadia", "Alina", "Natalia", "Oksana"]
  const couples = getAllCouples(boysArray, girlsArray)
  displayResult(boysArray, girlsArray, couples)
}

//Варіант 1
function getAllCouples(boysArray, girlsArray) {
  const resArr = []
  for (const boy of boysArray) {
    for (const girl of girlsArray) {
      resArr.push([boy, girl])
    }
  }
  return resArr
}
//Варіант 2
// function getAllCouples(boysArray, girlsArray) {
//   const resArr = []
//   function couples(boysArray, boyIndex, girlsArray) {
//     if (boyIndex < boysArray.length) {
//       for (const girl of girlsArray) {
//         resArr.push([boysArray[boyIndex], girl])
//       }
//       couples(boysArray, boyIndex + 1, girlsArray)
//     }
//   }
//   couples(boysArray, 0, girlsArray)
//   return resArr
// }
//Варіант 3
// function getAllCouples(boysArray, girlsArray) {
//   const resArray = []
//   function couples(boysArray, boyIndex, girlsArray, girlIndex) {
//     if (boyIndex < boysArray.length) {
//       if (girlIndex < girlsArray.length) {
//         resArray.push([boysArray[boyIndex], girlsArray[girlIndex]])
//         couples(boysArray, boyIndex, girlsArray, girlIndex + 1)
//       } else couples(boysArray, boyIndex + 1, girlsArray, 0)
//     }
//   }
//   couples(boysArray, 0, girlsArray, 0)
//   return resArray
// }
function displayResult(boys, girls, result) {
  const container = document.querySelector(".result-container")
  container.innerText = `Масив хлопців: ${boys}\nМасив дівчат: ${girls}\n${result.join(
    " | "
  )}`
}
