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
// Particles.js Config
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('Particles.js loaded!');
});

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
