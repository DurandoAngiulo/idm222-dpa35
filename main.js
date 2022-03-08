const mobileNav = document.getElementById('mobile-nav');
const openButton = document.getElementById('mobile-nav-open-button');
const closeButton = document.getElementById('mobile-nav-close-button');

openButton.addEventListener("click", () => {
    mobileNav.classList.remove('mobile-nav-closed');
    mobileNav.classList.add('mobile-nav-open');
});

// When we close it do the opposite
closeButton.addEventListener("click", () => {
    mobileNav.classList.remove('mobile-nav-open');
    mobileNav.classList.add('mobile-nav--closed');
});