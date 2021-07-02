const inputEl = document.querySelector('#validation-input');
const inputDataLength = Number(inputEl.getAttribute('data-length'));
const inputIsVAlid = inputEl.addEventListener('focus', onFormInput);

function onFormInput(event) {
    
    if (event.currentTarget.value.length === inputDataLength) {
        inputEl.className = 'valid';
        inputEl.className = 'invalid';
    }
    else {
        inputEl.className = 'invalid';
        inputEl.className = 'valid';
    }
};