
window.addEventListener('load', getQuote);

const quoteButton = document.querySelector(".new-quote");
quoteButton.addEventListener('click', getQuote);

const endpoint = 'https://dog.ceo/api/breeds/image/random';

async function getQuote(){
    let text = await fetch(endpoint);
    let response = await text.text();

    let jsonResponse = JSON.parse(response);
    console.log(jsonResponse);
    console.log(jsonResponse['message']);

    displayImage(jsonResponse['message']);
}

function displayImage(imageUrl) {
  const img = document.createElement('img');
  img.src = imageUrl;
  document.body.appendChild(img); 
}
