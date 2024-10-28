window.onload = () => {
  const students = [
    new Student("John Doe", 1, "Computer Science"),
    new Student("Jane Smith", 1, "Computer Science"), // той самий курс і факультет
    new Student("Alice Johnson", 2, "Mathematics"),
    new Student("Bob Brown", 2, "Computer Science"), // той самий курс, інший факультет
    new Student("Chris Green", 1, "Mathematics"), // той самий факультет, інший курс
    new Student("Emma White", 3, "Physics"),
    new Student("Michael Black", 3, "Physics"),
    new Student("Liam Blue", 1, "Physics"),
  ]
  renderArray(students, ".array-container")

  const resContainer = document.querySelector(".results-container")
  const resMap = getStudentsNumberPerCourse(
    students.map((student) => student.courseNumber)
  )
  const resSet = getFacultySet(students.map((student) => student.faculty))

  renderResults({ resMap, differentFacultyNumber: resSet.size }, resContainer)
}

function getFacultySet(facultyArr) {
  return new Set(facultyArr)
}
function getStudentsNumberPerCourse(courseArray) {
  const map = new Map()
  for (const course of courseArray) {
    map.set(course, (map.get(course) ?? 0) + 1)
  }
  return map
}
function renderResults(resObj, container) {
  const { resMap, differentFacultyNumber } = resObj

  let resStr = ""
  for (const [key, value] of resMap) {
    resStr += `${key} => ${value}\n`
  }
  resStr += `Кількість факультетів: ${differentFacultyNumber}`

  container.innerText = resStr
}

function renderArray(array, containerSelector) {
  document.querySelector(containerSelector).innerText = `Масив: ${array.join(
    " | "
  )}`
}
