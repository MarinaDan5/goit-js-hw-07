let inputText = document.querySelector('#name-input');
let nameOutput = document.querySelector('#name-output');



const onInput = () => {
  nameOutput.textContent = inputText.value ? inputText.value : 'незнакомец';
};

inputText.addEventListener('input', onInput);