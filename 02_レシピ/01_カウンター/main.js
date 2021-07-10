const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const minusoneButton = document.getElementById("minusone-button")
const multypleTwo = document.getElementById("multypletwo")

let count = 0

plusButton.onclick = function() {

count += 1

display.textContent = count
}

minusoneButton.onclick = function() {

    count -= 1

    display.textContent = count
}

multypleTwo.onclick = function() {

    count  *= 2

    display.textContent = count
}
