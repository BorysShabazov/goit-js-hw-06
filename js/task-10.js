function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesEl = document.querySelector('#boxes');
const controlsEl = document.querySelector('#controls');

function createBoxes() {
  const amount = controlsEl.children[0].value;
  for (let i = 0; i < amount; i += 1) {
    boxesEl.insertAdjacentHTML('beforeend', `<div></div>`);
  }
  console.log(boxesEl.children);
  const children = [...boxesEl.children];
  children.map(el => (el.style.height = '30px')((el.style.width = '30px')));
  console.log(children);
}

function deleteBoxes() {
  boxesEl.innerHTML = '';
}

controlsEl.children[1].addEventListener('click', createBoxes);

controlsEl.children[2].addEventListener('click', deleteBoxes);
