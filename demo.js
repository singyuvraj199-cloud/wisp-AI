let person = document.querySelector(`.person`);
let quote = document.querySelector(`p`);
let button = document.querySelector(`.nextquote`);
const quotes = [{
    quote:`"imagination is more important than knowledge."`,
    person: `albert einstein`
},{
    quote: `"it always seeems impossible until its done."`,
    person: `nelson mandela`
},{
    quote: `"stay hungary, stay foolish"`,
    person:`steve jobs`
},{
    quote:`"succes is not final faliure is not fatal; it is the courage to continue tahat count."`,
    person: `windston churching`
}, ];
let current = 0;

button.addEventListener("click", () => {
    current++;

    if (current >= quotes.length) {
        current = 0;
    }

    quote.innerText = quotes[current].quote;
    person.innerText = quotes[current].person;
});

