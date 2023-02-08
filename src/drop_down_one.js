const toggleMenu = function() {
    const menuBody = document.getElementById('menu-one-dropdown')
    if (menuBody.className == 'hidden') {
        menuBody.classList.remove('hidden')
    } else {
        menuBody.classList.add('hidden')
    }
}

export default toggleMenu