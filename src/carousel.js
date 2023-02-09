let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    console.log(slideIndex)
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('carousel-slide')
    console.log(i)
    console.log(n)
    if (n > plusSlides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length};
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex-1].style.display = 'block';
}

export { showSlides, plusSlides }