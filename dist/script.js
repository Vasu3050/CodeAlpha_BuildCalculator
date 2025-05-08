const toggleBtn = document.getElementById("themeTogglebtn");
const toggleIcon = document.getElementById("toggleIcon");

toggleBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  const isDark = document.documentElement.classList.contains("dark");
  toggleIcon.innerHTML = isDark
    ? `<img  class="max-h-4" src="../icons/sun-icon.png" alt="sun icon">`
    : `<img class="max-h-4" src="../icons/night-icon.png" alt="moon icon">`;
});

const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("mousedown", () => {
    btn.classList.add("scale-95");
  });

  btn.addEventListener("mouseup", () => {
    btn.classList.remove("scale-95");
  });

  btn.addEventListener("mouseleave", () => {
    btn.classList.remove("scale-95");
  });

  // For touch devices
  btn.addEventListener("touchstart", () => {
    btn.classList.add("scale-95");
  });

  btn.addEventListener("touchend", () => {
    btn.classList.remove("scale-95");
  });
});

const clickSound = new Audio("../audio/click.mp3");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    clickSound.currentTime = 0;
    clickSound.play();
  });
});

document.querySelectorAll("button").forEach((btn) => {
    btn.classList.add("transition-transform", "duration-100", "ease-in-out");
  });
  


