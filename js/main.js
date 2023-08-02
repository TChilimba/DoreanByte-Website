document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("year").innerHTML = new Date().getFullYear();

  const toggleButton = document.querySelector(".toggle-nav");
  const toggleOverlay = document.querySelector(".toggle-overlay");
  const closeButton = document.querySelector(".close-button");

  toggleButton.addEventListener("click", function () {
    toggleOverlay.classList.toggle("toggled");
  });

  closeButton.addEventListener("click", function () {
    toggleOverlay.classList.toggle("toggled");
  });
});
