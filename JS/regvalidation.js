const register = document.querySelector('#register');
const messages = document.querySelector('#messages');

const formRegister = document.querySelector('#form-register');
const registerText = document.querySelector('#register-text');
const registerUsername = document.querySelector('#register-username');
const registerEmail = document.querySelector('#register-email');
const registerPassword = document.querySelector('#register-password');
const registerPassword2 = document.querySelector('#register-password2');

let errors = [];
formRegister.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!registerText.value) {
        errors.push('Please input a valid name');
    }
    if (!registerUsername.value) {
        errors.push('Username field cannot be empty');
    }
    if (!registerEmail.value) {
        errors.push('Please input a mail address');
    }
    if (!registerPassword.value || registerPassword.value.length < 4) {
        errors.push('Password field cannot be less than 4 characters');
    }
    if (registerPassword2.value !== registerPassword.value) {
        errors.push('Password fields do not match');
    }

    errors.forEach(err => {
        const div = document.createElement('div');
        div.classList.add('messages');
        div.textContent = err;
        register.prepend(div);

        setTimeout(() => div.remove(), 4000);
    });
    errors.length = 0;
});