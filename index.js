import toggleMenu from './src/toggle_hidden.js'

import menuOne from './src/styles/menu_one_styles.css'

import menuTwo from './src/styles/menu_two_styles.css'
import menu from './src/assets/menu.png'
import plus from './src/assets/plus.gif'
import camera from './src/assets/camera.png'
import alarm from './src/assets/alarm.png'
import clip from './src/assets/clip.png'
import pen from './src/assets/pen.png'

import carouselStyle from './src/styles/carousel_styles.css'
import alleyOne from './src/assets/carousel/alley.jpg'
import alleyTwo from './src/assets/carousel/alley2.jpg'
import restaurant from './src/assets/carousel/restaurant.jpg'


const menuOneButton = document.querySelector('.menu-one-btn')
const menuTwoButton = document.querySelector('.menu-two-btn')


menuOneButton.addEventListener('click', () => {
    toggleMenu(menuOneButton.id);
})

menuTwoButton.addEventListener('click', () => {
    toggleMenu(menuTwoButton.id);
})