// Testimonial Slider
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
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

// 3d Card slider 
const CardSwiper = new Swiper('.card-swiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loopAdditionalSlides: 3,
  coverflowEffect: {
    rotate: 0,
    stretch: 20,
    depth: 140,
    modifier: 2.5,
    slideShadows: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  initialSlide: 3
});

// Book preview slider
const cardPreviewSwiper = new Swiper('.card-preview-swiper', {
  spaceBetween: 0,
  autoplay: {
    delay: 5000,
    // disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 100,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 10,
      spaceBetween: 40,
    },
  },
});

// Header Mobile Menu
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

// Close Menu
closeMenu.addEventListener("click", () => {
  topMenu.classList.remove("visible");
  topMenu.classList.add("invisible");
});


// Tab Switcher - Book Customization
const toggleLabel = document.getElementById('toggle-label');
const toggleCheckbox = document.getElementById('toggle-checkbox');
const monthlyBtn = document.getElementById('monthly-btn');
const yearlyBtn = document.getElementById('yearly-btn');

let isYearly = false;

function updateToggle() {
  if (isYearly) {
    toggleLabel.textContent = 'Yearly';
    toggleLabel.style.transform = 'translateX(105%)';
  } else {
    toggleLabel.textContent = 'Monthly';
    toggleLabel.style.transform = 'translateX(0)';
  }
}

monthlyBtn.addEventListener('click', function () {
  isYearly = false;
  toggleCheckbox.checked = false;
  updateToggle();
});

yearlyBtn.addEventListener('click', function () {
  isYearly = true;
  toggleCheckbox.checked = true;
  updateToggle();
});

updateToggle();