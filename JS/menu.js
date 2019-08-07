const menuToggle = document.querySelector('#menu-toggle');
const navbarLeft = document.querySelector('#navbar-left');


menuToggle.addEventListener('click', () => {
    navbarLeft.classList.toggle('active');
});


