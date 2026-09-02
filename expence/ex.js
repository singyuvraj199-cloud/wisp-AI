const newbutton = document.querySelector(`#add-new-task`);
const cards = document.querySelector(`.cards`);
const card1 = document.querySelector(`.card1`);
const card2 = document.querySelector(`.card2`);
const card3 = document.querySelector(`.card3`);
const worktodo = document.querySelector(`#work-to-do`);  

let Taskcount = 0;
const addtodo = document.createElement(`div`);
addtodo.classList.add(`addtodo`);
addtodo.style.display = "flex"
addtodo.style.width = "200px"
addtodo.style.height = "100px"
addtodo.style.backgroundColor = "white"
addtodo.style.border = "1px solid #333"
addtodo.style.borderRadius = "10px"
addtodo.style.backdropFilter = "blur(6px)";
addtodo.style.display = "none"
addtodo.style.flexDirection = "column"
addtodo.style.position = "fixed";
addtodo.style.top = "50%";
addtodo.style.left = "50%";
addtodo.style.padding = "10px";
addtodo.style.transform = "translate(-50%, -50%)";

const input = document.createElement(`input`);
input.classList.add(`input`);
input.placeholder = "add todo"
input.style.textTransform = "capitalize"
input.style.padding = "5px 7px"




const button = document.createElement(`button`);
button.classList.add(`save`);
button.innerText = "save"
button.style.textTransform = "capitalize"
button.style.padding = "7px 11px"

document.body.appendChild(addtodo);
addtodo.appendChild(input);
addtodo.appendChild(button);

newbutton.addEventListener("click", function(){
    addtodo.style.display = "flex"

})

const save = document.querySelector(`.save`);
save.addEventListener("click", function(){
    if(input.value.trim() === ""){
    return;
}
    
    Taskcount++;
    const newTask = document.createElement("div");
    const deletebutton = document.createElement(`button`)
    deletebutton.classList.add(`delete`)
    deletebutton.textContent = "delete"
    deletebutton.style.padding = "5px 7px"
    deletebutton.style.borderRadius = "10px"
    newTask.classList.add("task");
    newTask.id = "task" + Taskcount;
    newTask.draggable = true;
    newTask.textContent = input.value.trim();
    newTask.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text", e.target.id);
    });
    card1.appendChild(newTask);
    newTask.appendChild(deletebutton);
    addtodo.style.display = "none";
    input.value = "";
    

    
    
})

  
card2.addEventListener("dragover",(e)=>{
    e.preventDefault();
})
card3.addEventListener("dragover",(e)=>{
    e.preventDefault();
})
card1.addEventListener("dragover",(e)=>{
    e.preventDefault();
})
card2.addEventListener("drop", (e)=>{
    e.preventDefault();
    const id = e.dataTransfer.getData("text");
     const newtask = document.getElementById(id);
     card2.appendChild(newtask);
})
card3.addEventListener("drop", (e)=>{
    e.preventDefault();
    const id = e.dataTransfer.getData("text");
     const newtask = document.getElementById(id);
     card3.appendChild(newtask);
})


card1.addEventListener("drop", (e)=>{
    e.preventDefault();
    const id = e.dataTransfer.getData("text");
     const newTask = document.getElementById(id);
     card1.appendChild(newTask);


})
cards.addEventListener("click", function(e){
     if(e.target.classList.contains("delete")){
        e.target.closest(".task").remove();
    }
})











