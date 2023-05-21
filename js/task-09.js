function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

console.log(getRandomHexColor());

const changeColorBtnEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');

function changeColor() {
  bodyEl.style.backgroundColor = getRandomHexColor();
}

changeColorBtnEl.addEventListener('click', changeColor);
