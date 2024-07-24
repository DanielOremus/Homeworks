function showResult() {
  clearResult()

  const array = calculate()
  for (let i = 0; i < array.length; i++) {
    const label = document.createElement("label")
    const div = document.createElement("div")
    label.innerText = `S${i + 1}=${array[i]}`
    div.appendChild(label)
    document.getElementById("result-container").appendChild(div)
  }
}

function calculate() {
  const inputList = document.querySelectorAll("input")
  const a = parseFloat(inputList[0].value)
  const b = parseFloat(inputList[1].value)
  const c = parseFloat(inputList[2].value)
  const s1 = a + 12 + b
  const s2 = Math.sqrt(((a + b) / 2) * a).toFixed(4)
  const s3 = Math.cbrt((a + b) * c).toFixed(4)
  const s4 = Math.sin(a / -b).toFixed(4)
  return [s1, s2, s3, s4]
}

function clearResult() {
  document.getElementById("result-container").innerText = ""
}
