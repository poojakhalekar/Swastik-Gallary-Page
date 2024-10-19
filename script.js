document.addEventListener('DOMContentLoaded', () => {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slideshow');

    function showSlides() {
        slides.forEach((slide, index) => {
            slide.style.opacity = '0';
        });

        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        slides[slideIndex - 1].style.opacity = '1';
        setTimeout(showSlides, 2000); // Change image every 2 seconds
    }

    showSlides();
});
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobliemmenu);

function mobliemmenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
