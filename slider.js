// declare a variable to store the current slide index
var currentSlide = 1;

// declare a function to show a slide based on its index
function showSlide(n) {
  
 // get all the slide elements by their class name
 var slides = document.getElementsByClassName("slide");
 
 // loop through all the slides and hide them
 for (var i = 0; i < slides.length; i++) {
   slides[i].style.opacity = "0";
 }
 
 // show the slide with index n by changing its opacity
 slides[n-1].style.opacity = "1";
}

// declare a function to show the previous slide
function prevSlide() {
  
 // decrement the current slide index by one
 currentSlide--;
 
 // if the current slide index is less than one, wrap it around to the last slide
 if (currentSlide < 1) {
   currentSlide = slides.length;
 }
 
 // show the previous slide
 showSlide(currentSlide);
}

// declare a function to show the next slide
function nextSlide() {
  
 // increment the current slide index by one
 currentSlide++;
 
 // if the current slide index is greater than the number of slides, wrap it around to the first slide
 if (currentSlide > slides.length) {
   currentSlide = 1;
 }
 
 // show the next slide
 showSlide(currentSlide);
}

// show the first slide when the page loads
showSlide(currentSlide);
