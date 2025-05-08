const toggleBtn = document.getElementById("themeTogglebtn");
const toggleIcon = document.getElementById("toggleIcon");

toggleBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  const isDark = document.documentElement.classList.contains("dark");
  toggleIcon.innerHTML = isDark
    ? `<img  class="max-h-4" src="../icons/sun-icon.png" alt="sun icon">`
    : `<img class="max-h-4" src="../icons/night-icon.png" alt="moon icon">`;
});
