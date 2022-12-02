const container = document.querySelector(".input-container");
const todoList = document.querySelector(".todo-list");

const markup = `<input type="text" class = 'input-js'/> 
<button type='button' class='box-green'>Add to-do</button>
<button type='button' class='box-red'>Delete to-do</button>`;

container.insertAdjacentHTML("beforeend", markup);

const textInput = document.querySelector(".input-js");
const addBtn = document.querySelector(".box-green");
const removeBtn = document.querySelector(".box-red");

addBtn.addEventListener("click", addHandler);

function addHandler() {
  localStorage.setItem("toDo", textInput.value);
}

// todoList.insertAdjacentHTML(
//   "beforeend",
//   `
// <li class=''></li>
// `
// );
