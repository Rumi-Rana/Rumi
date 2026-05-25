// DOM Element Selectors
const header = document.querySelector('.header');
const learnBtn = document.querySelector('.learn-btn');
const moreText = document.querySelector('.more-details');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

// 1. COMBINED & OPTIMIZED SCROLL EVENTS
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Sticky Header toggle
    header.classList.toggle('sticky', scrollY > 50);

    // Smart Close Mobile Menu on actual page scroll
    if (scrollY > 150 && navbar.classList.contains('active')) {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    }
});

// 2. LEARN MORE TOGGLE
if (learnBtn && moreText) {
    learnBtn.addEventListener('click', () => {
        const isHidden = moreText.classList.toggle('hidden');
        learnBtn.innerText = isHidden ? "Learn More" : "Show Less";
    });
}

// 3. MOBILE MENU TOGGLE
if (menuIcon && navbar) {
    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
        menuIcon.classList.toggle('bx-x');
    });
}