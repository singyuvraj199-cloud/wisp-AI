//get the elements

let openbutton = document.getElementById("open-btn");
let modelcontainer = document.getElementById("model-container");
let close = document.getElementById("close");


//event listener for open button
openbutton.addEventListener("click", function(){
    modelcontainer.style.display = "block";
});
close.addEventListener("click", function(){
    modelcontainer.style.display = "none";
})    
window.addEventListener("click", function(e){
    if(e.target == modelcontainer){
        modelcontainer.style.display = "none";
    }
});   
