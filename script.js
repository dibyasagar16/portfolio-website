// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
    // Close mobile menu if open
    const navbarLinks = document.getElementById("navbar-links");
    if (navbarLinks.classList.contains("active")) {
      navbarLinks.classList.remove("active");
    }
  });
});

// Mobile menu toggle
const hamburgerMenu = document.getElementById("hamburger-menu");
const navbarLinks = document.getElementById("navbar-links");

hamburgerMenu.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

// Intersection Observer for scroll animations
const fadeInElements = document.querySelectorAll(".fade-in");

const observerOptions = {
  root: null /* viewport as the root */,
  rootMargin: "0px",
  threshold: 0.1 /* 10% of the element must be visible */,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("appear");
      observer.unobserve(entry.target); /* Stop observing once it appears */
    }
  });
}, observerOptions);

fadeInElements.forEach((element) => {
  observer.observe(element);
});

// Contact form submission handling
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

function chhoda() {
  alert("Chhoda Called");

  setTimeout(() => {
    formMessage.classList.remove("hidden"); /* Show success message */
    contactForm.reset(); /* Clear form fields */

    // Hide message after a few seconds
    setTimeout(() => {
      formMessage.classList.add("hidden");
    }, 5000);
  }, 1000);
}

contactForm.addEventListener("submit", function (e) {
  e.preventDefault(); /* Prevent actual form submission */

  // Simulate form submission success
  setTimeout(() => {
    formMessage.classList.remove("hidden"); /* Show success message */
    contactForm.reset(); /* Clear form fields */

    // Hide message after a few seconds
    setTimeout(() => {
      formMessage.classList.add("hidden");
    }, 5000);
  }, 1000); /* Simulate a 1-second delay for submission */
});

// Custom cursor logic
const dotCursor = document.getElementById("dot-cursor");
const circleCursor = document.getElementById("circle-cursor");

let mouseX = 0;
let mouseY = 0;
let circleX = 0;
let circleY = 0;
const lerpFactor = 0.1; /* Controls smoothness (0-1, lower is smoother) */

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  /* Update dot cursor position directly */
  dotCursor.style.left = `${mouseX}px`;
  dotCursor.style.top = `${mouseY}px`;
});

function animateCustomCursor() {
  /* Interpolate circle cursor position towards mouse position */
  circleX += (mouseX - circleX) * lerpFactor;
  circleY += (mouseY - circleY) * lerpFactor;

  circleCursor.style.left = `${circleX}px`;
  circleCursor.style.top = `${circleY}px`;

  requestAnimationFrame(animateCustomCursor);
}

animateCustomCursor(); /* Start the animation loop */

// Skill Modal Logic
const skillItems = document.querySelectorAll(".skill-item");
const skillModalOverlay = document.getElementById("skill-modal-overlay");
const modalCloseButton = document.getElementById("modal-close-button");
const modalSkillTitle = document.getElementById("modal-skill-title");
const modalSkillDescription = document.getElementById(
  "modal-skill-description"
);

skillItems.forEach((item) => {
  // Only open modal on click
  item.addEventListener("click", () => {
    const skillName = item.dataset.skillName;
    const skillDescription = item.dataset.skillDescription;

    modalSkillTitle.textContent = skillName;
    modalSkillDescription.textContent = skillDescription;
    skillModalOverlay.classList.add("show");
  });
});

// Close modal when clicking the close button
modalCloseButton.addEventListener("click", () => {
  skillModalOverlay.classList.remove("show");
});

// Close modal when clicking outside the modal content
skillModalOverlay.addEventListener("click", (e) => {
  if (e.target === skillModalOverlay) {
    skillModalOverlay.classList.remove("show");
  }
});
