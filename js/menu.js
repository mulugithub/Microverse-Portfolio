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

// when the user scrolls check if the user scrolled to a new section
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
  sections.forEach((section) => {
    const sectionId = section.getAttribute('id');
    // Get the top and bottom positions of each section relative to the viewport.
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      // Remove the 'active' class from all navigation links
      navLinks.forEach((link) => {
        link.classList.remove('active');
        // Add the active class to the nav link with the matching section ID
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
});
