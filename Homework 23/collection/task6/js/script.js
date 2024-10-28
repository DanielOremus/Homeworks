window.onload = () => {
  const mathStudents = [
    "Шевченко",
    "Лисенко",
    "Костенко",
    "Коцюбинський",
    "Сковорода",
    "Маланюк",
    "Гончар",
    "Довженко",
  ]
  const historyStudents = [
    "Шевченко",
    "Франко",
    "Гончар",
    "Сосюра",
    "Сковорода",
    "Стус",
    "Яновський",
  ]
  renderArray({ mathStudents, historyStudents }, ".array-container")

  const resContainer = document.querySelector(".results-container")

  const mathStudentsSet = new Set(mathStudents)
  const historyStudentsSet = new Set(historyStudents)

  const circleIntersectionsNumber = getIntersectionByCircle(
    mathStudentsSet,
    historyStudentsSet
  ).size
  console.log(circleIntersectionsNumber)
  const studentsUnionNumber = getStudentsUnion(
    mathStudentsSet,
    historyStudentsSet
  ).size

  renderResults(
    { circleIntersectionsNumber, studentsUnionNumber },
    resContainer
  )
}
function getIntersectionByCircle(mathStudentsSet, historyStudentsSet) {
  return historyStudentsSet.intersection(mathStudentsSet)
}
function getStudentsUnion(mathStudentsSet, historyStudentsSet) {
  return mathStudentsSet.union(historyStudentsSet)
}
function renderResults(resObj, container) {
  const { circleIntersectionsNumber, studentsUnionNumber } = resObj

  container.innerText = `Кількість студентів, що відвідують, і математику, і історію: ${circleIntersectionsNumber}\nКількість студентів, що відвідують хочаб 1 гурток: ${studentsUnionNumber}`
}

function renderArray(renderObj, containerSelector) {
  const { mathStudents, historyStudents } = renderObj
  const container = document.querySelector(containerSelector)

  container.innerText = `Математика: ${mathStudents.join(", ")}\n`
  container.innerText += `Історія: ${historyStudents.join(", ")}`
}
