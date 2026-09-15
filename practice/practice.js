let randomnumber = Math.floor(Math.random()*101)



const input = document.querySelector(`#input`)
const btn = document.querySelector(`.btn`)
const displaycount = document.querySelector(`#count`)
const displayguessed = document.querySelector(`#guessed`)
let count = 0;
let guessed = [];
input.addEventListener("keydown",function(event){
  if(event.key === "Enter"){
     btn.click();
  }
})
btn.addEventListener("click", function(){
  if(input.value.trim() === ""){
    alert("guess any number!")
  }
    let userguess = Number(input.value);
    count++;
    guessed.push(userguess)

    displaycount.textContent = count;
    displayguessed.textContent = guessed.join(",");

    //use of statements//
  if(userguess === randomnumber){
    alert("correct! you won!");
  }else if(userguess > randomnumber){
    alert("Too high!")
  }else alert("Too low!")
  
 input.value = ""
 });



 
