const controlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

controlEl.addEventListener('click', e => {
  textEl.style.fontSize = `${e.currentTarget.value}px`;
});
