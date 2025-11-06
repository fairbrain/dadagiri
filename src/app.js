let navButton = document.getElementById('nav-toggler');
let navMenu = document.querySelector('.navbar');
let closeNav = document.getElementById('close-nav');

navButton.addEventListener('click', () => {
    navMenu.classList.toggle('active-nav');
});

closeNav.addEventListener('click', () => {
    navMenu.classList.remove('active-nav');
});