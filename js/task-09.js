function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtnEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const colorEl = document.querySelector('.color');

function changeColor() {
  const randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  colorEl.textContent = randomColor;
}

changeColorBtnEl.addEventListener('click', changeColor);
