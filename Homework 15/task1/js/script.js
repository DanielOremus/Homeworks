// class ShootingRange {
//   constructor(fieldLength, rabbitsNumber) {
//     this.field = this.generateField(fieldLength, rabbitsNumber)
//   }
//   generateField(fieldLength, rabbitsNumber) {
//     const array = new Array(fieldLength).fill(0)
//     for (let i = 0; i < rabbitsNumber; i++) {
//       let randomIndex
//       do {
//         randomIndex = this.getRandomIndex(fieldLength)
//       } while (array[randomIndex] === 1)
//       array[randomIndex] = 1
//     }
//     return array
//   }
//   getRandomIndex(fieldLength) {
//     return Math.floor(Math.random() * fieldLength)
//   }
//   displayField() {
//     return this.field.join(" | ")
//   }
// }

//ДЗ
function onBtnClick(rangeObj) {
  const userPos = parseInt(document.querySelector("input").value)
  if (userPos < 0 || isNaN(userPos)) alert("Введіть коректне значення")
  else alert(rangeObj.shoot(userPos))
}

window.onload = () => {
  const fieldContainer = document.querySelector(".field-container")
  const shootingRange = {
    field: [1, 1, 0, 1, 0, 0, 0, 1, 0],
    toString: function () {
      return this.field.join(", ")
    },
    shoot(userPos) {
      if (this.field[userPos] === 1) return "Там є заєць"
      return "Там нема зайця"
    },
  }
  fieldContainer.textContent = `Поле: ${shootingRange}`
  const shootBtn = document.querySelector("button")
  shootBtn.onclick = onBtnClick.bind(null, shootingRange)
}
