const input = document.querySelector("#input");
const button = document.querySelector("#button");
const list = document.querySelector("#list");

let edittodo = null;

const addtodo = () => {
  const inputText = input.value.trim();
  if (inputText.length === 0) {
    alert("add your to do");
    return;
  }
   
  if (button.textContent === "edit"){
    (edittodo.target.previousElementSibling.innerHTML = inputText);
    button.textContent = "add";
    input.value = "";
    updatetodoInStorage(); // ADDED
  } else {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerHTML = inputText;
    li.appendChild(p);

    const editbtn = document.createElement("button");
    editbtn.innerText = "edit";
    editbtn.classList.add("btn1");
    li.appendChild(editbtn);

    const deletebtn = document.createElement("button");
    deletebtn.innerText = "remove";
    deletebtn.classList.add("btn");
    li.appendChild(deletebtn);

    list.appendChild(li);
    input.value = "";
    savetodo(inputText);
   }
};

const updatetodo = (e) => {
  if (e.target.innerHTML === "remove") {
    list.removeChild(e.target.parentElement);
    updatetodoInStorage(); // ADDED
  }
  if (e.target.innerHTML === "edit") {
    edittodo = e;
    input.value = e.target.previousElementSibling.innerHTML;
    input.focus();
    button.textContent = "edit";
  }
};

function savetodo(todo){
  const todos = JSON.parse(localStorage.getItem("todos"))||[];
  todos.push(todo);
  localStorage.setItem(`todos`, JSON.stringify(todos));
}

function updatetodoInStorage() {
  const todos = [...list.querySelectorAll("li p")].map((p) => p.innerHTML);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function loadtodos() {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];

  todos.forEach((todo) => {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerHTML = todo;
    li.appendChild(p);

    const editbtn = document.createElement("button");
    editbtn.innerText = "edit";
    editbtn.classList.add("btn1");
    li.appendChild(editbtn);

    const deletebtn = document.createElement("button");
    deletebtn.innerText = "remove";
    deletebtn.classList.add("btn");
    li.appendChild(deletebtn);

    list.appendChild(li);
  });
}

button.addEventListener(`click`, addtodo);
list.addEventListener(`click`, updatetodo);
loadtodos();