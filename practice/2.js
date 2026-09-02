const question = document.querySelector(`#question`)
const button = document.querySelectorAll(`.btn`)
const next = document.querySelector(`#next-button`)
const result = document.querySelector(`#result`)
 let currentquestion = 0;
 let score = 0;
 const questions = [
    {
        ques: "capital of bhutan?",
        ans:["india","naepal","kathmandu","thimpu"],
        answer:"thimpu",
    },
    {
        ques: "capital of bhutan?",
        ans:["india","naepal","hsahdhsa","thimpu"],
        answer:"thimpu"
    },
    {
        ques: "capital of bhutan?",
        ans:["india","hjsfdjhf","kathmandu","thimpu"],
        answer:"thimpu"
    },
    {
        ques: "capital of bhutan?",
        ans:["hfks","naepal","kathmandu","thimpu"],
        answer:"thimpu"
    },
    {
        ques: "capital of bhutan?",
        ans:["india","naepal","kathmandu","thimpu"],
        answer:"thimpu"
    },
    {
        ques: "capital of bhutan?",
        ans:["india","hdfsh","kathmandu","thimpu"],
        answer:"thimpu"
    },
    {
        ques: "capital of bhutan?",
        ans:["india","naepal","kathmandu","thimpu"],
        answer:"thimpu"
    },
    {
        ques: "capital of bhutan?",
        ans:["india","naepal","kathmandu","thimpu"],
        answer:"thimpu"
    },
    {
        ques: "capital of bhutan?",
        ans:["india","naepal","kathmandu","thimpu"],
        answer:"thimpu"
    },
    {
        ques: "capital of bhutan?",
        ans:["india","naepal","kathmandu","thimpu"],
        answer:"thimpu"
    },
    {
        ques: "capital of bhutan?",
        ans:["india","naepal","kathmandu","thimpu"],
        answer:"thimpu"
    },
    {
        ques: "capital of bhutan?",
        ans:["india","naepal","kathmandu","thimpu"],
        answer:"thimpu"
    },
]

function showquestion(){

const q = questions[currentquestion]
question.textContent = q.ques;

button.forEach(function(button,index){
    button.textContent = q.ans[index];
    button.addEventListener("click", function(){
        if(button.textContent === q.answer){
            alert("correct!")
            score++;
        }else{
            alert("wrong!!!!!!!")
        }
        

})

        
    })





}

showquestion();
next.addEventListener("click", function(){
    currentquestion++
    showquestion();

})
