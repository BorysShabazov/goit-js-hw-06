const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', e => {
  e.target.classList.add('valid');
  console.log(e.target.dataset.length);
});

// console.log(inputEl.dataset.length);
