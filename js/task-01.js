const categoriesListEls = document.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesListEls.length}`);

categoriesListEls.forEach(e => {
  console.log(`Category: ${e.firstElementChild.textContent}`);
  console.log(`Elements: ${e.lastElementChild.children.length}`);
});
