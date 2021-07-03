let inputText = document.querySelector('#name-input');
let nameOutput = document.querySelector('#name-output');


inputText.addEventListener('input', onInput);

 function onInput () {
    if (inputText.value === '') {
       nameOutput.innerHTML = 'незнакомец';
    } else{
    nameOutput.innerHTML = inputText.value;
    }
}
