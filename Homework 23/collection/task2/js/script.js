window.onload = () => {
  const books = [
    new Book("1984", 1949, "George Orwell"),
    new Book("To Kill a Mockingbird", 1960, "Harper Lee"),
    new Book("The Great Gatsby", 1925, "F. Scott Fitzgerald"),
    new Book("Go Set a Watchman", 2015, "Harper Lee"),
    new Book("Pride and Prejudice", 1813, "Jane Austen"),
    new Book("Tender Is the Night", 1934, "F. Scott Fitzgerald"),
    new Book("The Lord of the Rings", 1954, "J.R.R. Tolkien"),
    new Book("The Hobbit", 1937, "J.R.R. Tolkien"),
    new Book("War and Peace", 1869, "Leo Tolstoy"),
  ]
  renderArray(books, ".array-container")

  const resContainer = document.querySelector(".results-container")
  const resMap = getBooksNumberPerAuthor(books.map((book) => book.author))
  renderResults({ resMap }, resContainer)
}

function getBooksNumberPerAuthor(authorsArr) {
  const map = new Map()
  for (const author of authorsArr) {
    map.set(author, (map.get(author) ?? 0) + 1)
  }
  return map
}

function renderResults(resObj, container) {
  const { resMap } = resObj

  let resStr = ""
  for (const [key, value] of resMap) {
    resStr += `${key} => ${value}\n`
  }

  container.innerText = resStr
}

function renderArray(array, containerSelector) {
  document.querySelector(containerSelector).innerText = `Масив: ${array.join(
    " | "
  )}`
}
