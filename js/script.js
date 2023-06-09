let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

let mainVid = document.querySelector('.main-video');

document.querySelectorAll('.course-3 .box .video video').forEach(vid =>{

    vid.onclick = () =>{
        let src = vid.getAttribute('src');
        mainVid.classList.add('active');
        mainVid.querySelector('video').src = src;
    }

});

document.querySelector('#close-vid').onclick = () =>{
    mainVid.classList.remove('active');
}






document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.querySelector('.carousel-container');
    const carouselItems = Array.from(document.querySelectorAll('.carousel-item'));
    let currentIndex = 0;
  
    function showSlide(index) {
      carouselItems.forEach(function(item, i) {
        if (i === index) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % carouselItems.length;
      showSlide(currentIndex);
    }
  
    setInterval(nextSlide, 3000); // Change slide every 3 seconds
  
    showSlide(currentIndex);
  });
  