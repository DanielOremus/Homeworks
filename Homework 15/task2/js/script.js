function getStaticAuto() {
  return {
    brand: "BMW",
    tankSize: 50,
    seatsNumber: 4,
    currentLiters: 0,
    currentPassengersNumber: 0,
    addFuel: function (liters) {
      const availableLiters = this.tankSize - this.currentLiters
      if (liters > availableLiters)
        throw new Error(`В бак ще вміщається тільки ${availableLiters} л`)
      this.currentLiters += liters
    },
    addPassengers: function (number) {
      const emptySeats = this.seatsNumber - this.currentPassengersNumber
      if (number > emptySeats)
        throw new Error(`Доступних місць лише: ${emptySeats}`)
      this.currentPassengersNumber += number
    },
    removePassengers: function (number) {
      if (this.currentPassengersNumber < number)
        throw new Error(
          `В машині зараз пасажирів: ${this.currentPassengersNumber}`
        )
      this.currentPassengersNumber -= number
    },
    printPassengersNumber: function () {
      alert(
        `На даний момент кількість пасажирів: ${this.currentPassengersNumber}`
      )
    },
    // toString: function () {
    //   return `Марка: ${this.brand}, розмір бакa: ${this.tankSize}, кількість місць: ${this.seatsNumber}`
    // },
  }
}

function onAddFuel(autoObj, inputs) {
  const value = parseFloat(inputs[0].value)
  try {
    autoObj.addFuel(value)
    alert("Заправлено")
  } catch (error) {
    alert(error.message)
  }
}
function onAddPassengers(autoObj, inputs) {
  const value = parseInt(inputs[1].value)
  try {
    autoObj.addPassengers(value)
    alert("Ми посадили пасажирів")
  } catch (error) {
    alert(error.message)
  }
}
function onRemovePassengers(autoObj, inputs) {
  const value = parseInt(inputs[2].value)
  try {
    autoObj.removePassengers(value)
    alert("Ми висадили пасажирів")
  } catch (error) {
    alert(error.message)
  }
}

window.onload = () => {
  const auto = getStaticAuto()
  const buttons = document.querySelectorAll("button")
  const inputs = document.querySelectorAll("input")

  buttons[0].onclick = onAddFuel.bind(null, auto, inputs)
  buttons[1].onclick = onAddPassengers.bind(null, auto, inputs)
  buttons[2].onclick = onRemovePassengers.bind(null, auto, inputs)
  buttons[3].onclick = auto.printPassengersNumber.bind(auto)
}
