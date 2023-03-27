const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgArray = ['/assignments/assignment9/img/pinkflowers.jpg','/assignments/assignment9/img/whiteflowers.jpg','/assignments/assignment9/img/pinktulips.jpg','/assignments/assignment9/img/bouquet.jpg'];

/* Declaring the alternative text for each image file */
const altText = ['pinktulips', 'pinkflowers','whiteflowers'];

/* Looping through img */
// for loop
for (i = 0; i < imgArray.length; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', imgArray[i]);
    newImage.setAttribute('alt', altText[i]);
    newImage.addEventListener('click',() => {
        displayedImage.src = newImage.src;
        displayedImage.alt = newImage.alt;
      });
    thumbBar.appendChild(newImage);
};



/* Wiring up the Darken/Lighten button */
btn.addEventListener('click',() => {
  if (btn.getAttribute('class') === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.setAttribute('style','background-color: rgba(0,0,0,0.3)');
  } else if (btn.getAttribute('class') === 'light') {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.setAttribute('style','background-color: rgba(0,0,0,0)');
  }
});