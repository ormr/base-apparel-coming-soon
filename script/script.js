const form = document.forms[0];
const input = form.email;
const label = document.querySelector('.section-box__label');
const errorMessage = document.querySelector('.error-message');

form.onsubmit = (e) => {
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value))) { // RegExp for email validation
        label.classList.add('wrong-label');
        input.classList.add('wrong-input');
        errorMessage.classList.add('error-message__active');
        e.preventDefault();
    } else {
        label.classList.remove('wrong-label');
        input.classList.remove('wrong-input');
        errorMessage.classList.remove('error-message__active');
    }
}