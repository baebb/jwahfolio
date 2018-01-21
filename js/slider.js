//returns an array of slide inside the #slides
var slides = $('#slides').find('.slide');

var currSlide = 0;

function nextSlide () {
  // remove showing class currSlide
  slides[currSlide].className = 'slide';
  // set currSlide to the next slide index in array
  currSlide = (currSlide + 1) % slides.length;
  // add showing class to new currSlide
  slides[currSlide].className = 'slide showing';
}

//run nextSlide every 3 seconds
function slideInterval () {
  setInterval(nextSlide, 3000);
}

slideInterval();