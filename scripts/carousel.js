var slideIndex = 0;

// Cache the slides and dots
var slides = document.getElementsByClassName("carousel-slide");
var dots = document.getElementsByClassName("dot");

showSlides(slideIndex);

// Next/previous controls
function cycleSlides(n) {
    slideIndex += n
    showSlides(slideIndex);
}

// Thumbnail image controls
function switchToSlide(n) {
    slideIndex = n;
    showSlides(slideIndex);
}

function showSlides(n) {
    if (n >= slides.length) {
        slideIndex = 0
    } 
    if (n < 0) {
        slideIndex = slides.length - 1
    }
    for (var i = 0; i < slides.length; ++i) {
        slides[i].style.display = "none"; 
        dots[i].classList.remove("active")
    }
    slides[slideIndex].style.display = "block"; 
    dots[slideIndex].classList.add("active")
}