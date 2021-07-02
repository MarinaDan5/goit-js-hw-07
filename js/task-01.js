const categoryItemEl = document.querySelectorAll('li.item');
console.log(`В списке ${categoryItemEl.length} категории.`);


const itemsEl = document.querySelectorAll('li.item');
Array.prototype.forEach.call(itemsEl, (element) => {
    const title = element.querySelector('h2').innerHTML;
    const itemsLength = element.querySelectorAll('li').length;
    console.log(`Категория ${ title } / Количество элементов ${itemsLength} `);
});
