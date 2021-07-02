let renderButtonEl = document.querySelector('[data-action="render"]');
let destroyButtonEl = document.querySelector('[data-action="destroy"]');
let divEl = document.querySelector('#boxes')

renderButtonEl.addEventListener('click', getAmount);
destroyButtonEl.addEventListener('click', destroyBoxes);

function getAmount() {
  let amount = document.querySelector('#controls input').value;
  createBoxes(amount);
};

function createBoxes(amount) {
    let basicSize = 30;
    let newElement = document.createDocumentFragment();

    for (let i = 0; i < amount; i++) {
        let newDivSize = basicSize + i * 10;
        let div = document.createElement('div');
        div.style.cssText = `width: ${newDivSize}px; height: ${newDivSize}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
        divEl.appendChild(div);
    
    }
};
function destroyBoxes() {
  divEl.innerHTML = "";
}

function random() {
  return Math.floor(Math.random() * 256);
}