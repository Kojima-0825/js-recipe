
const button = document.getElementById("button")

const alertMessage = function() {
  alert("クリックしたね")
}

button.onclick = alertMessage

const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")

const sayHello = function() {
  console.log("hello")
}

inputText.oninput = sayHello
inputDate.oninput = sayHello

document.onkeydown = function(e) {
    console.log(e.key)
  }
  