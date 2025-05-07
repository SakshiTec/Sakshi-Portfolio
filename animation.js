document.addEventListener("DOMContentLoaded", function () {
  const typeTarget = document.querySelector(".typing-text");
  const text = typeTarget.dataset.text;
  let index = 0;

  function type() {
    if (index < text.length) {
      typeTarget.innerHTML += text.charAt(index);
      index++;
      setTimeout(type, 100);
    }
  }

  type();
});
