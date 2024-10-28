class Book {
  constructor(title, yearOfPublication, author) {
    this.title = title
    this.yearOfPublication = yearOfPublication
    this.author = author
  }
  toString() {
    return `Назва - ${this.title}, рік видання - ${this.yearOfPublication}, автор - ${this.author}`
  }
}
