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

<script>
  const blurOverlay = document.getElementById("blur-overlay");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      blurOverlay.classList.add("blur-active");
    } else {
      blurOverlay.classList.remove("blur-active");
    }
  });
</script>
