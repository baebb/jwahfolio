/*
  Basic Javascript slider, currently utilised only on the mobile version.
  - Switch from interval to selectable allowing user enough time to view.

 */

//returns an array of slide inside the #slides
var slides = $('#slides').find('.slide');


// console.log(slides);

var currSlide = 0;

function nextSlide () {
  // remove showing class currSlide
  slides[currSlide].className = 'slide';
  // set currSlide to the next slide index in array
  currSlide = (currSlide + 1) % slides.length;
  // add showing class to new currSlide
  slides[currSlide].className = 'slide showing';
}

// run nextSlide every 6 seconds
// Utilise interval and click triggers for final
function slideInterval () {
  setInterval(nextSlide, 6000);
}

slideInterval();