function toogleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./147144.png")
    img.setAttribute("alt", "CAMCAMCAM")
  } else {
    img.setAttribute("src", "./zam.png")
    img.setAttribute("alt", "zamram")
  }
}
