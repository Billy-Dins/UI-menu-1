const toggleMenu = function(id) {
    const menuBody = document.getElementById(`menu-${id}-dropdown`)
    if (menuBody.className == 'hidden') {
        menuBody.classList.remove('hidden')
    } else {
        menuBody.classList.add('hidden')
    }
}

export default toggleMenu