const inputElement = document.getElementById("input-todo")
const inputElement2 = document.getElementById("input-todo2")
const container = document.getElementById("cards-container")


inputElement.onkeypress = function(e) {
    if (e.keyCode === 13) {
        const card = createCard(inputElement.value)
        container.append(card)

        inputElement.value = ""
    }
  }
  
const container2 = document.getElementById("cards-container2")

  inputElement2.onkeypress = function(e) {
    if (e.keyCode === 13) {
        const card = createCard2(inputElement.value)
        container2.append(card)

        inputElement.value = ""
    }

}

  
  const createCard = function(text) {
    const card = document.createElement("div")
    card.className = "card"

    const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text

  card.append(todo)

  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"

  deleteButton.onclick = function() {
    card.remove()
  }
  card.append(deleteButton)

  return card
}

const createCard2 = function(text) {
    const card2 = document.createElement("div")
    card2.className = "card"

    const todo2 = document.createElement("div")
  todo2.className = "todo"
  todo2.textContent = text

  card2.append(todo2)

  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"

  deleteButton.onclick = function() {
    card2.remove()
  }
  card2.append(deleteButton)

  return card2
}


