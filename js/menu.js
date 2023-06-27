const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close-menu');

const toggleMenu = () => mobileMenu.classList.toggle('hidden');

hamburger.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', toggleMenu);

const dropDownLinks = document.querySelectorAll('.mobile-menu-content');
for (let navlink = 0; navlink < dropDownLinks.length; navlink += 1) {
  dropDownLinks[navlink].addEventListener('click', toggleMenu);
}