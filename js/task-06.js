const inputEl = document.querySelector('#validation-input');
 const inputDataLength = Number(inputEl.getAttribute('data-length'));

inputEl.addEventListener('blur', onFormInput);

function onFormInput(event) {
  
    if (inputDataLength === event.target.value.length) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
}