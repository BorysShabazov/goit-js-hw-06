const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', e => {
  outputEl.textContent =
    e.target.value.length !== 0 ? `${e.target.value}` : 'Anonymous';
});
