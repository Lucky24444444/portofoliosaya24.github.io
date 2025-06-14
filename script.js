const icon = themeToggle.querySelector(".icon");

function updateThemeIcon() {
  icon.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  updateThemeIcon();
});

updateThemeIcon();
