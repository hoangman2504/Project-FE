// var slideIndex = 0;
//           showSlides();
          
//           function showSlides() {
//             var i;
//             var slides = document.getElementsByClassName("mySlides");
//             for (i = 0; i < slides.length; i++) {
//               slides[i].style.display = "none";
//               removeEventListener
//             }
//             slideIndex++;
//             if (slideIndex > slides.length) {slideIndex = 1}
//             slides[slideIndex-1].style.display = "block";
//             setTimeout(showSlides, 2000); // Thay đổi ảnh sau mỗi 2 giây
//           }

//           // 3 dấu chấm chuyển động slide show qua lại 

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slideshow")[0].getElementsByTagName("img");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  slideIndex++;
  if (slideIndex > slides.length) {
      slideIndex = 1
  }
  setTimeout(showSlides, 3000); // Thay đổi đây để điều chỉnh tốc độ chuyển động giữa các slide
}
          