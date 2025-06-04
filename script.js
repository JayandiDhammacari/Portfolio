const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

function activateLinkById(id) {
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${id}`) {
      link.classList.add("active");
    }
  });
}

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.6  // 60% of section visible to consider "active"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      activateLinkById(entry.target.id);
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});


const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav');
const menuIcon = document.querySelector('#menu-icon');

// Toggle menu on click
menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('active');
  nav.classList.toggle('active');
});

// Close menu when a nav link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    menuIcon.classList.remove('active');
  });
});
