window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

/**
 * Returns true if an element is within the bounds of the viewport, otherwise returns false
 *  
 * @param el The element being checked
 */
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && 
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && 
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
}


var expand_elements = document.getElementsByClassName("expand-marker");

/**
 * Remove the expand class from anything on the screen at the start
 */
function clearInitialExpands() {
    for(var i = 0; i < expand_elements.length; ++i) {
        if(isElementInViewport(expand_elements[i])) {
            expand_elements[i].classList.remove("expand-marker");
            clearInitialExpands();
            break;
        }
    }
}

clearInitialExpands();

/**
 * Check if an element is in the viewport every time the user scrolls
 */
function checkIfInViewport() {
    for(var i = 0; i < expand_elements.length; ++i) {
        if(isElementInViewport(expand_elements[i]) && !expand_elements[i].classList.contains("animate-expand")) {
            expand_elements[i].classList.add("animate-expand");
            expand_elements[i].classList.remove("expand-marker");
            checkIfInViewport();
            break;
        }
    }
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("carousel-slide");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    } 
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block"; 

    dots[slideIndex-1].className += " active";
}

window.addEventListener("scroll", checkIfInViewport)
