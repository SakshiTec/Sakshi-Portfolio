// Animation on Scroll
const faders = document.querySelectorAll('.fade-up, .fade-in');

const appearOptions = {
  threshold: 0.2,
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);
// Particles Background
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('Particles.js loaded.');
});

// Typing Effect
var typed = new Typed('.typing', {
  strings: [
    "Passionate Electronics Engineer 💻",
    "Creative Tech Innovator 🚀",
    "Dreamer, Believer, Achiever 🌸"
  ],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true
});

// Music Control
const music = document.getElementById("background-music");
const control = document.getElementById("music-control");

control.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    control.textContent = "🔊";
  } else {
    music.pause();
    control.textContent = "🔇";
  }
});

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
