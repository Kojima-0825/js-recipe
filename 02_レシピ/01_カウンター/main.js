const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const minusoneButton = document.getElementById("minusone-button")
const multypleTwo = document.getElementById("multypletwo")

let count = 0

plusButton.onclick = function() {

count += 1

display.textContent = count
}

let number = 0

minusoneButton.onclick = function() {

    number -= 1

    display.textContent = number
}

let figure = 1

multypleTwo.onclick = function() {

    figure  *= 2

    display.textContent = figure
}
