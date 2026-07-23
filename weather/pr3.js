
//-----declaring constant----//

const input = document.querySelector(`.search`);
const button = document.querySelector(`.btn`);




//---adding events listeners---//
button.addEventListener(`click`, () => {
    const list =  document.createElement("li");
list.textContent = input.value;
document.querySelector("ul").appendChild(list);   
input.value = "";

const edit = document.createElement("button");
edit.textContent = "edit";
edit.classList.add("btn")


const remove = document.createElement("button");
remove.textContent = "remove";
remove.classList.add("btn1")
list.appendChild(edit);
list.appendChild(remove);



})
//---creating  button edit,remove---//
