const { evaluate } = math;
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

const display = document.getElementById("displayContent");
const cursor = document.getElementById("cursor");

function formatWithCommas(value) {
  const parts = value.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

function updateDisplay(value) {
  const formatted = formatWithCommas(value);
  display.textContent = formatted;

  const length = formatted.length;
  if (length < 10) {
    display.parentElement.classList.remove("text-4xl", "text-2xl");
    display.parentElement.classList.add("text-6xl");
  } else if (length < 16) {
    display.parentElement.classList.remove("text-6xl", "text-2xl");
    display.parentElement.classList.add("text-4xl");
  } else {
    display.parentElement.classList.remove("text-6xl", "text-4xl");
    display.parentElement.classList.add("text-2xl");
  }
}

let currentValue = "";
updateDisplay(currentValue);

function handleInput(input) {
    if (input === "=") {
      try {
        const evaluated = evaluate(currentValue);
        currentValue = evaluated.toString();
      } catch {
        currentValue = "Error";
      }
    } else if (input === "⌫") {
      currentValue = currentValue.slice(0, -1);
    } else if (input === "AC") {
      currentValue = "";
    } else {
      currentValue += input;
    }
  
    updateDisplay(currentValue);
  }
  

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent.trim();
    handleInput(value);
  });

  button.addEventListener("touchstart", () => {
    const value = button.textContent.trim();
    handleInput(value);
  });
});

document.addEventListener("keydown", (e) => {
  const key = e.key;

  if (/[0-9+\-*/().]/.test(key)) {
    handleInput(key);
  } else if (key === "Enter") {
    handleInput("=");
  } else if (key === "Backspace") {
    handleInput("⌫");
  }
});


