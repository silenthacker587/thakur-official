// mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
    }
});

// close menu on link click (mobile)
navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
            navLinks.style.display = "none";
        }
    });
});

// contact form (front-end only)
const form = document.getElementById("contact-form");
const statusEl = document.getElementById("form-status");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    statusEl.textContent = "Thanks, your message has been recorded (demo).";
    form.reset();
});

// year in footer
document.getElementById("year").textContent = new Date().getFullYear();
