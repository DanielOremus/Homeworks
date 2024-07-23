function showResult() {
  const a = parseFloat(document.querySelectorAll("input")[0].value)
  const b = parseFloat(document.querySelectorAll("input")[1].value)
  const c = parseFloat(document.querySelectorAll("input")[2].value)
  console.log(a / -b)
  alert(`S1=${a + 12 + b}
        S2=${Math.sqrt(((a + b) / 2) * a)}
        S3=${Math.cbrt((a + b) * c)}
        S4=${Math.sin(a / -b)}`)
}
