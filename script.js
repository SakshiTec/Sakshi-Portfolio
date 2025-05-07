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
// Initialize ParticlesJS
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('Particles.js loaded successfully 🎉');
});

// Typing Effect for Home Page
document.addEventListener("DOMContentLoaded", function() {
  const typedText = document.querySelector(".typed-text");
  const textArray = ["Passionate Electronics Engineer 💡", "Tech Innovator 🚀", "Dreamer 🌸"];
  let textArrayIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 120);
    } else {
      setTimeout(erase, 2000);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typedText.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 60);
    } else {
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) textArrayIndex = 0;
      setTimeout(type, 1000);
    }
  }

  if(typedText) type();
});

// Soft Background Music
const audio = new Audio('Image/background.mp3');
audio.volume = 0.3; // 30% volume (so it's soft and dreamy)
audio.loop = true;
audio.play();

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
