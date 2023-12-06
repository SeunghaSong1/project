var slides = document.querySelectorAll("#slides > img");
var currentSlideIndex = 0;

showSlide(currentSlideIndex);

var prev = document.getElementById("prev");
var next = document.getElementById("next");

prev.addEventListener("click", prevSlide);
next.addEventListener("click", nextSlide);

var slideInterval = setInterval(nextSlide, 3000);

function showSlide(index) {
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = i === index ? "block" : "none";
    }
}

function prevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    showSlide(currentSlideIndex);
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
}

document.getElementById("slideShow").addEventListener("mouseover", function() {
    clearInterval(slideInterval);
});

document.getElementById("slideShow").addEventListener("mouseout", function() {
    slideInterval = setInterval(nextSlide, 3000);
});
