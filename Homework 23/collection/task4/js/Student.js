class Student {
  constructor(fullName, courseNumber, faculty) {
    this.fullName = fullName
    this.courseNumber = courseNumber
    this.faculty = faculty
  }
  toString() {
    return `ПІБ - ${this.fullName}, курс - ${this.courseNumber}, факультет - ${this.faculty}`
  }
}
