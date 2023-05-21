const decrementEl = document.querySelector('[data-action="decrement"]');
const valueEl = document.querySelector('#value');
const incrementEl = document.querySelector('[data-action="increment"]');

let counterValue = 0;
valueEl.textContent = counterValue;

decrementEl.addEventListener('click', () => {
  valueEl.textContent = counterValue -= 1;
});

incrementEl.addEventListener('click', () => {
  valueEl.textContent = counterValue += 1;
});
