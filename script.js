let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Automatic slideshow
let autoSlideInterval = setInterval(function() {
  plusSlides(1);
}, 4000); // Change image every 4 seconds

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove active class from dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Show the current slide and set the current dot as active
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Stop the automatic slide when a manual action is taken (optional)
document.querySelector('.slideshow-container').addEventListener('mouseover', () => {
  clearInterval(autoSlideInterval);
});

document.querySelector('.slideshow-container').addEventListener('mouseout', () => {
  autoSlideInterval = setInterval(function() {
    plusSlides(1);
  }, 4000);
});
