window.addEventListener('load', getQuote);

const quoteButton = document.querySelector(".new-quote");
quoteButton.addEventListener('click', getQuote);

const imgButton = document.querySelector(".new-img");
imgButton.addEventListener('click', getImage);

const endpoint = 'https://www.boredapi.com/api/activity';
const endpoint1 = 'https://dog.ceo/api/breeds/image/random';

async function getQuote(){
    let text = await fetch(endpoint);
    let response = await text.text();

    let jsonResponse = JSON.parse(response);
    console.log(jsonResponse);
    console.log(jsonResponse['activity']);

    displayQuote(jsonResponse['activity']);
}

async function getImage(){
    let t = await fetch(endpoint1);
    let res = await t.text();

    let jsResponse = JSON.parse(res);
    console.log(jsResponse);
    console.log(jsResponse['message']);

    displayImage(jsResponse['message']);
}

function displayQuote(x){
    document.getElementById('js-quote-text').textContent = x;
}

function displayImage(imageUrl) {
    const img = document.createElement('img');
    img.src = imageUrl;
    document.getElementById('js-img').innerHTML = ''; // clear previous image
    document.getElementById('js-img').appendChild(img); // add the new image
}
