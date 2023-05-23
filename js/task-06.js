const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', e => {
  if (
    inputEl.value.length < e.target.dataset.length ||
    inputEl.value.length > e.target.dataset.length
  ) {
    e.target.classList.add('invalid');
    e.target.classList.remove('valid');
  } else {
    e.target.classList.add('valid');
    e.target.classList.remove('invalid');
  }
});
