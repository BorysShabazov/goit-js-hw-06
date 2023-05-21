const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEls = document.querySelector('#ingredients');

const list = ingredients.map(el => {
  const item = document.createElement('li');
  item.classList.add('item');
  item.textContent = el;
  return item;
});

listEls.append(...list);
