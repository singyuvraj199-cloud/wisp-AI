const rock = document.querySelector(`#rock`);
const paper = document.querySelector(`#paper`);
const sissor = document.querySelector(`#sissor`);
const computer = document.querySelector(`#computer`);
const you = document.querySelector(`#you`);
const result = document.querySelector(`#result`);

let choices = ["rock","paper","sissor"]
let playerscore = 0;
let computerscore = 0;
 function playgame(playerchoice){
    let computerchoice = choices[Math.floor(Math.random()*3)];
    console.log("you",playerchoice)
    console.log("computer",computerchoice)

if(computerchoice === playerchoice){
    result.textContent = ("draw!")
}else if(
    (playerchoice === "rock" && computerchoice === "sissor") ||
       (playerchoice === "paper" && computerchoice === "rock") ||
       (playerchoice === "sissor" && computerchoice === "paper")
){
    playerscore++
    result.textContent = ("you won!")
}else{
    computerscore++
   result.textContent = ("you losse!")
   
}
    you.textContent = playerscore; 
    computer.textContent = computerscore;
    
 }
 paper.addEventListener("click", function(){
    playgame("paper");
 })
 rock.addEventListener("click", function(){
    playgame("rock");
 })
 sissor.addEventListener("click", function(){
    playgame("sissor");

 })
 