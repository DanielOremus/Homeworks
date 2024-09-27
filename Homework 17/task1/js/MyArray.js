class MyArray {
  static getPositiveCount(array) {
    this.isArray(array)
    return array.reduce(
      (accumulator, el) => (el > 0 ? accumulator + 1 : accumulator),
      0
    )
  }
  static getNegativeCount(array) {
    this.isArray(array)
    return array.reduce(
      (accumulator, el) => (el < 0 ? accumulator + 1 : accumulator),
      0
    )
  }
  static getElEntryNumber(el, array) {
    this.isArray(array)
    return array.reduce(
      (accumulator, e) => (e === el ? accumulator + 1 : accumulator),
      0
    )
  }
  static isArray(array) {
    if (!Array.isArray(array)) throw new Error("Array is required")
  }
}
