const toggleMenu = function(id) {
    const menuBody = document.getElementById(`menu-${id}-dropdown`)
    menuBody.classList.toggle('hidden')
}

export default toggleMenu