let navbar = document.querySelector('.header .navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    loop: true,
    
    effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
        speed: 400,
        spaceBetween: 100,
      },
    pagination: {
      el: ".swiper-pagination",
      
    },
  });

  var swiper = new Swiper(".gallery-slider", {
    loop: true,
    
    effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
        
      },
      pagination: {
        el: ".swiper-pagination",
        
      },
  });