const swiper = new Swiper('.swiper', {
    // slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        // When the viewport width is >= 640px
        768: {
          slidesPerView: 2, // Show 2 slides
          spaceBetween: 30, // Increase space between slides
        },
        // When the viewport width is >= 1024px
        1024: {
          slidesPerView: 3, // Show 3 slides
          spaceBetween: 40, // Increase space between slides
        },
      },
 });

 const menuToggle = document.getElementById("menuToggle");
 const closeMenu = document.getElementById("closeMenu");
 const topMenu = document.getElementById("topMenu");

 // Show/Hide Menu on Toggle
 menuToggle.addEventListener("click", () => {
   if (topMenu.classList.contains("invisible")) {
     topMenu.classList.remove("invisible");
     topMenu.classList.add("visible");
   } else {
     topMenu.classList.remove("visible");
     topMenu.classList.add("invisible");
   }
 });

 // Close Menu on Close Button
 closeMenu.addEventListener("click", () => {
   topMenu.classList.remove("visible");
   topMenu.classList.add("invisible");
 });