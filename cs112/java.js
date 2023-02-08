
function changeImage1() {
    var image = document.getElementById("myImage1");
    image.src ="images/lourve.jpg";
}
function originalImage1() {
    var image = document.getElementById("myImage1");
       image.src = "images/eiffel-tower.jpg";
}
function changeImage2() {
    var image = document.getElementById("myImage2");
    image.src ="images/mount fuji.jpg";
}
function originalImage2() {
    var image = document.getElementById("myImage2");
       image.src = "images/tokyo.jpg";
}
function changeImage3() {
    var image = document.getElementById("myImage3");
    image.src ="images/Buckingham.jpg";
}
function originalImage3() {
    var image = document.getElementById("myImage3");
       image.src = "images/lodon.jpg";
}
function changeImage4() {
    var image = document.getElementById("myImage4");
    image.src ="images/tulum2.jpg";
}
function originalImage4() {
    var image = document.getElementById("myImage4");
       image.src = "images/tulum.jpg";
}
var slides = document.querySelectorAll(".slides");
var currentSlide = 0;

function showSlides() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.display = "block";
}

setInterval(showSlides, 3000);
var scroller = document.querySelector(".scroller");
var images = document.querySelectorAll(".images");
var currentImage = 0;

function showImages(n) {
  scroller.scrollLeft = images[currentImage].offsetLeft + (images[currentImage].offsetWidth / 2) - (scroller.offsetWidth / 2);
  currentImage = (currentImage + n + images.length) % images.length;
}

scroller.addEventListener("click", function(event) {
  if (event.clientX > scroller.offsetWidth / 2) {
    showImages(1);
  } else {
    showImages(-1);
  }
});