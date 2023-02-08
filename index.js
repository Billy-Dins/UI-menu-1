import toggleMenu from './src/drop_down_one.js'

import menuOne from './src/styles/menu_one_styles.css'

import menu from './src/assets/menu.png'

const menuButton = document.querySelector('#menu-btn')

menuButton.addEventListener('click', () => {
    toggleMenu();
})