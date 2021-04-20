const containerMenu = document.querySelector('#container-menu-hamburg')
const menuInput = document.querySelector('#menu-mobile__input')
const menu = document.querySelector('.menu')

containerMenu.addEventListener('click', () => {
    containerMenu.classList.toggle('aberto')
    menu.classList.toggle('show')
});