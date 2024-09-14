// class Auto {
//   constructor(brand, tankSize, seatsNumber) {
//     this.brand = brand
//     this.tankSize = tankSize
//     this.currentLiters = 0
//     this.seatsNumber = seatsNumber
//     this.currentPassengersNumber = 0
//   }
//   addFuel(liters) {
//     const newValue = this.currentLiters + liters
//     const availableLiters = this.tankSize - this.currentLiters
//     if (newValue > availableLiters)
//       throw new Error(`В бак вміщається не більше ${availableLiters} л`)
//     this.currentLiters = newValue
//   }
//   printPassengersNumber() {
//     alert(`Кількість пасажирів: ${this.currentPassengersNumber}`)
//   }
//   addPassengers(number) {
//     const newValue = this.currentPassengersNumber + number
//     const emptySeats = this.seatsNumber - this.currentPassengersNumber
//     if (newValue > emptySeats)
//       throw new Error(`Доступних місць лише: ${emptySeats}`)
//     this.currentPassengersNumber = newValue
//   }
//   removePassengers(number) {
//     const newValue = this.currentPassengersNumber - number
//     if (newValue < 0) throw new Error(`В машині нема стількох пасажирів`)
//     this.currentPassengersNumber = newValue
//   }
// }
