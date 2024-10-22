window.onload = () => {
  setTodoList([
    "Cook Dinner",
    "Join Meeting",
    "Drink Coffee",
    "Work",
    "Sleep",
    "Learn",
  ])

  setPeriodicInterval(5000)
}

function setPeriodicInterval(interval) {
  let intervalId
  intervalId = setInterval(() => {
    try {
      ask()
    } catch (error) {
      if (error instanceof RangeError) {
        clearInterval(intervalId)
        alert(error.message)
        localStorage.removeItem("todo")
      } else console.log(error)
    }
  }, interval)
}

function ask() {
  const todoList = getTodoList()

  const randomTodoObj = pickRandomTodo(todoList)
  const isFinished = confirm(`${randomTodoObj.element} - finished?`)
  answerHandler(isFinished, randomTodoObj.index, todoList)

  if (!todoList.length) throw new RangeError("Todo list is empty now")
}

function pickRandomTodo(array) {
  const randIndex = Math.floor(Math.random() * array.length)
  return { element: array[randIndex], index: randIndex }
}

function getTodoList() {
  return JSON.parse(localStorage.getItem("todo"))
}

function setTodoList(array) {
  localStorage.setItem("todo", JSON.stringify(array))
}

function answerHandler(ans, todoIndex, todoList) {
  if (ans) {
    todoList.splice(todoIndex, 1)
    setTodoList(todoList)
  }
}
