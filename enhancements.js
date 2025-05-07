// enhancements.js

// Typing effect using Typed.js
const typed = new Typed(".typed-text", {
  strings: ["Electronics Engineer", "Tech Innovator", "IoT Explorer", "Dreamer 🌙"],
  typeSpeed: 70,
  backSpeed: 40,
  loop: true,
});

// Scroll reveal animations using AOS
AOS.init({
  duration: 1200,
  once: true,
});

// Background music autoplay
window.addEventListener('DOMContentLoaded', () => {
  const bgMusic = new Audio('Image/background.mp3'); // Place your music file in /Image
  bgMusic.loop = true;
  bgMusic.volume = 0.2;
  bgMusic.play().catch(() => {
    console.log("Autoplay blocked. User interaction required.");
  });
});
