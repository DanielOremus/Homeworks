window.onload = onMounted

function onMounted() {
  if (confirm("Ви хочете читати новини?")) {
    window.location.href = "https://www.ukr.net/"
  } else
    setTimeout(() => {
      window.location.href = "https://www.ukr.net/"
    }, 20000)
}
