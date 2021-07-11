const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")

inputElement.onkeypress = function(e) {
  if (e.keyCode === 13) {
    const card = createCard(inputElement.value)
    container.append(card)

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

  // 削除ボタンを作る
  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"

  // 削除ボタンを押したときの処理を登録
  deleteButton.onclick = function() {
    // カードを削除する
    card.remove()
  }
  card.append(deleteButton)

  return card
}
