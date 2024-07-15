// NAVBAR MOBILE ANIMATION

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.navbar__mobile--burger');
    const menu = document.querySelector('nav');

    burger.addEventListener('click', () => {
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });
});
