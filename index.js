import toggleMenu from './src/toggle_hidden.js'
import { showSlides, plusSlides} from './src/carousel.js'

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
import market from './src/assets/carousel/market.jpg'
import boat from './src/assets/carousel/boat.jpg'


const menuOneButton = document.querySelector('.menu-one-btn')
const menuTwoButton = document.querySelector('.menu-two-btn')

const prev = document.querySelector('.prev-pic')
const next = document.querySelector('.next-pic')

prev.addEventListener('click', () => {
    plusSlides(-1)
})
next.addEventListener('click', () => {
    plusSlides(1)
})

menuOneButton.addEventListener('click', () => {
    toggleMenu(menuOneButton.id);
})

menuTwoButton.addEventListener('click', () => {
    toggleMenu(menuTwoButton.id);
})