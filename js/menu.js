const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('close-menu');
const mobileNav = document.querySelectorAll('.mobile-nav');

hamburger.addEventListener('click', () =>{
    closeMenu.classList.add('active');
    hamburger.classList.add('active');
})

// const toggleMobileMenu = () => menu.classList.toggle('hidden');

// hamburger.addEventListener('click', toggleMobileMenu);
// closeMenu.addEventListener('click', toggleMobileMenu);