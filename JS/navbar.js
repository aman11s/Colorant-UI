const hamburgerIcon = document.querySelector('.hamburger-icon');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const hamburgerClose = document.querySelector('.hamburger-close');
const hamburgerLink = document.querySelectorAll('.hamburger-link');

hamburgerIcon.addEventListener('click', () => {
    hamburgerMenu.classList.add('hamburger-menu-open');
});

hamburgerClose.addEventListener('click', () => {
    hamburgerMenu.classList.remove('hamburger-menu-open');
});

hamburgerLink.forEach(link => {
    
    link.addEventListener('click', () => {
        hamburgerMenu.classList.remove('hamburger-menu-open');
    });
});