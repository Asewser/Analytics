const ButtonMenu = document.querySelector('.mobile-navidation__header-button-menu')
const mobileNav = document.querySelector('.mobile-navidation')
const body = document.body
ButtonMenu.addEventListener('click', ButtonMenuClicked)
function ButtonMenuClicked(){
    mobileNav.classList.toggle('opened')
    body.classList.toggle('menu-opened')
}
