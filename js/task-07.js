const getInputEl = document.querySelector('#font-size-control');
const getSpanEl = document.querySelector('#text');

getInputEl.value = 0;
getSpanEl.style.fontSize = getInputEl.value;

getInputEl.addEventListener('input', changeSizeText);

function changeSizeText() {
       
       getSpanEl.style.fontSize = getInputEl.value + "px";
}
 /*=============2 вариант, усовершенствованный===========*/

// let getInputEl = document.querySelector('#font-size-control');
// let getSpanEl = document.querySelector('#text');

// getInputEl.min = getInputEl.value = "10";
// getInputEl.max = "30";

// getSpanEl.style.fontSize = `${getInputEl.min}px`;


// getInputEl.addEventListener('input', () => { getSpanEl.style.fontSize = `${getInputEl.value}px`});
