const inputElement1 = document.getElementById("input-todo1")
const inputElement2 = document.getElementById("input-todo2")
const inputElement3 = document.getElementById("input-todo3")
const container = document.getElementById("cards-container")
const container2 = document.getElementById("sub-container")
const container3 = document.getElementById("third-container")

inputElement1.onkeypress = function(e) {
  if (e.keyCode === 13) {
    const card = createCard(inputElement1.value)
    container.append(card)

    inputElement1.value = ""
  }
}

inputElement2.onkeypress = function(e) {
  if (e.keyCode === 13) {
    const card2 = createCard2(inputElement2.value)
    container2.append(card2)

    inputElement2.value = ""
  }
}

inputElement3.onkeypress = function(e) {
  if (e.keyCode === 13) {
    const card3 = createCard3(inputElement3.value)
    container3.append(card3)

    inputElement3.value = ""
  }
}


const createCard = function(text) {
  const card1 = document.createElement("div")
  card1.className = "card"

const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text
  card1.append(todo)

  // 削除ボタンを作る
  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"

  // 削除ボタンを押したときの処理を登録
  deleteButton.onclick = function() {
    // カードを削除する
    card1.remove()
  }
  card1.append(deleteButton)

  return card1
}

const createCard2 = function(text) {
  const card2 = document.createElement("div")
  card2.className = "card2"

const todo = document.createElement("div")
  todo.className = "todo2"
  todo.textContent = text
  card2.append(todo)

  // 削除ボタンを作る
  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"

  // 削除ボタンを押したときの処理を登録
  deleteButton.onclick = function() {
    // カードを削除する
    card2.remove()
  }
  card2.append(deleteButton)

  return card2
}

const createCard3 = function(text) {
  const card3 = document.createElement("div")
  card3.className = "card"

const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text
  card3.append(todo)

  // 削除ボタンを作る
  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"

  // 削除ボタンを押したときの処理を登録
  deleteButton.onclick = function() {
    // カードを削除する
    card3.remove()
  }
  card3.append(deleteButton)

  return card3
}


