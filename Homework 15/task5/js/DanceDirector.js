class DanceDirector {
  constructor(boysArray, girlsArray) {
    this.boysArray = boysArray
    this.girlsArray = girlsArray
  }
  getRandomPerson(array) {
    const index = Math.floor(Math.random() * array.length)
    return array[index]
  }
  getRandomCouple() {
    return `${this.getRandomPerson(this.boysArray)} - ${this.getRandomPerson(
      this.girlsArray
    )}`
  }
  run() {
    setInterval(() => {
      alert(this.getRandomCouple())
    }, 5000)
  }
}
