const getInputEl = document.querySelector('#font-size-control');
const getSpanEl = document.querySelector('#text');

getInputEl.addEventListener('input', changeSizeText);

function changeSizeText(event) {
    getSpanEl.style.fontSize = event.currentTarget.value + "px";
    
}