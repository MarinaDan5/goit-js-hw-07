const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const options = ingredients[0];
const imagesElement = document.querySelector('#ingredients')

const elements = ingredients.map(options => {
    const listEl = document.createElement('li');
    listEl.textContent = options;
    return listEl
});

console.log(elements);
imagesElement.append(...elements)