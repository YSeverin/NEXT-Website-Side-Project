// NEXT Website  JavaScript
// Mini Side Projekt um meine Skills zu testen
// von Severin Yankov
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

