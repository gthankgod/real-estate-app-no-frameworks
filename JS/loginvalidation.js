const login = document.querySelector('#login');

const formRegister = document.querySelector('#form-login');
const loginEmail = document.querySelector('#login-email');
const loginPassword = document.querySelector('#login-password');

let errors = [];
formRegister.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!loginEmail.value) {
        errors.push('Please input a mail address');
    }
    if (loginPassword.value.length < 4) {
        errors.push('Password field cannot be less than 4 characters');
    }
    if(errors.length) {
        errors.forEach(err => {
            const div = document.createElement('div');
            div.classList.add('messages');
            div.textContent = err;
            login.prepend(div);
    
            setTimeout(() => div.remove(), 4000);
        });
        errors.length = 0;
    }
    
    
});