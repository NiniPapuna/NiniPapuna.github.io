// when page finishes loading getQuote function will be called
window.addEventListener('load', getQuote);

const quoteButton = document.querySelector(".new-quote");
// if clicked then getQuote function called
quoteButton.addEventListener('click', getQuote);
//  holds the URL of the API endpoint
const api = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

// function for fetching api quotes
async function getQuote(){
    let t = await fetch(api);
    let response = await t.text();
    let jsonResponse = JSON.parse(response);
    console.log(jsonResponse);
    console.log(jsonResponse['question']);
    displayQuote(jsonResponse['question']);
}
// display quote when refresh page
function displayQuote(x){
    document.getElementById('js-quote-text').textContent = x;
}