let inputText = document.querySelector('#name-input');
let nameOutput = document.querySelector('#name-output');

inputText.oninput = function () {
    if (inputText.value === '') {
        nameOutput.innerHTML = 'незнакомец';
    }
        nameOutput.innerHTML = inputText.value;
}
