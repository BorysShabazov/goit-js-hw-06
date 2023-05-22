function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesEl = document.querySelector('#boxes');
const controlsEl = document.querySelector('#controls');

function createBoxes() {
  if (!controlsEl.children[0].value) {
    return;
  }

  const amount = controlsEl.children[0].value;
  for (let i = 0; i < amount; i += 1) {
    boxesEl.insertAdjacentHTML('beforeend', `<div></div>`);
  }

  for (let i = 0; i < boxesEl.children.length; i += 1) {
    boxesEl.children[i].style.height = `${30 + i * 10}px`;
    boxesEl.children[i].style.width = `${30 + i * 10}px`;

    if (!boxesEl.children[i].style.backgroundColor) {
      boxesEl.children[i].style.backgroundColor = getRandomHexColor();
    }
  }

  controlsEl.children[0].value = '';
}

function deleteBoxes() {
  controlsEl.children[0].value = '';
  boxesEl.innerHTML = '';
}

controlsEl.children[1].addEventListener('click', createBoxes);

controlsEl.children[2].addEventListener('click', deleteBoxes);
