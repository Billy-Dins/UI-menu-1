import toggleMenu from './src/drop_down_one.js'

import menuOne from './src/styles/menu_one_styles.css'
import menuTwo from './src/styles/menu_two_styles.css'

import menu from './src/assets/menu.png'
import plus from './src/assets/plus.gif'
import camera from './src/assets/camera.png'
import alarm from './src/assets/alarm.png'
import clip from './src/assets/clip.png'
import pen from './src/assets/pen.png'

const menuOneButton = document.querySelector('.menu-one-btn')
const menuTwoButton = document.querySelector('.menu-two-btn')


menuOneButton.addEventListener('click', () => {
    toggleMenu(menuOneButton.id);
})

menuTwoButton.addEventListener('click', () => {
    toggleMenu(menuTwoButton.id);
})