const container = document.querySelector(".input-container");
const todoList = document.querySelector(".todo-list");

const markup = `<input type="text" class = 'input-js'/> 
<button type='button' class='box-green'>Add to-do</button>
<button type='button' class='box-red'>Delete to-do</button>`;

container.insertAdjacentHTML("beforeend", markup);
