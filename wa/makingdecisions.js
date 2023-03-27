const select = document.querySelector('select');
const html = document.querySelector('.output');

select.addEventListener('change', () => {
  const choice = select.value;

  // ADD SWITCH STATEMENT
  switch(choice) {
    case "purple":
      update("purple", "blue");
      break;
  }
});

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}
