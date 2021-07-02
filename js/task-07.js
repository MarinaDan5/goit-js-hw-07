const getInputEl = document.querySelector('#font-size-control');
const getSpanEl = document.querySelector('#text');

getInputEl.addEventListener('input', changeSizeText);

function changeSizeText() {
       
       getSpanEl.style.fontSize = getInputEl.value + "px";
}