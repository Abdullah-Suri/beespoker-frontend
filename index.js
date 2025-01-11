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

const CardSwiper = new Swiper('.card-swiper', {
  effect: 'coverflow', // Use the coverflow effect
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto', // Automatically adjust based on card width
  // loop: true, // Enable infinite looping
  loopAdditionalSlides: 3, // Adds extra slides to prevent blank areas in the loop
  coverflowEffect: {
    rotate: 0, // No rotation
    stretch: 20, // Adjust spacing between slides
    depth: 140, // Creates the 3D depth effect
    modifier: 2.5, // Multiplies the 3D effect
    slideShadows: false, // Disable shadows for a cleaner look
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  initialSlide: 3
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


const toggleLabel = document.getElementById('toggle-label');
const toggleCheckbox = document.getElementById('toggle-checkbox');
const monthlyBtn = document.getElementById('monthly-btn');
const yearlyBtn = document.getElementById('yearly-btn');

// Initial state
let isYearly = false;

// Function to update the toggle label and button styles based on the state
function updateToggle() {
  if (isYearly) {
    toggleLabel.textContent = 'Yearly';
    toggleLabel.style.transform = 'translateX(105%)';
  } else {
    toggleLabel.textContent = 'Monthly';
    toggleLabel.style.transform = 'translateX(0)';
  }
}

// Event listeners for the buttons
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

// Initial setup
updateToggle();