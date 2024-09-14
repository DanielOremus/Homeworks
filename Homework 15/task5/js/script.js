async function getData() {
  const { boys, girls } = await fetch("./data.json").then((data) => data.json())
  return {
    boys,
    girls,
  }
}

window.onload = async () => {
  const { boys, girls } = await getData()
  const runBtn = document.querySelector("button")
  const director = new DanceDirector(boys, girls)
  runBtn.onclick = director.run.bind(director)
}
