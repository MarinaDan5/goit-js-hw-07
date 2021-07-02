let counterValue = 0;

const addButtonValue = document.querySelector('[data-action="increment"]');
const removeButtonValue = document.querySelector('[data-action="decrement"]');

addButtonValue.addEventListener('click', increment);
removeButtonValue.addEventListener('click', decrement);


function increment() {
    counterValue += 1;
    document.getElementById('value').innerHTML = counterValue;
};
function decrement() {
    counterValue -= 1;
    document.getElementById('value').innerHTML = counterValue;
};