const hexContainer = document.querySelector(".hex-color");
const rgbContainer = document.querySelector(".rgb-color");

const colorButton = document.getElementById("colorButton");
const hexColorCode = document.getElementById("hexColorCode");
const rgbColorCode = document.getElementById("rgbColorCode");
const copyMessage = document.getElementById("copyMessage");

const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

// Generate Random HEX Color on button click
colorButton.addEventListener("click", () => {
  const hexColor = generateRandomHexColor();
  updateHexColor(hexColor);
});

// Function to generate a random HEX color
function generateRandomHexColor() {
  const characters = "0123456789ABCDEF";
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += characters[Math.floor(Math.random() * characters.length)];
  }
  return hexColor;
}

// Update HEX color display and container background
function updateHexColor(hexColor) {
  hexContainer.style.backgroundColor = hexColor;
  hexColorCode.innerText = hexColor;

  // Update RGB equivalent
  updateRGBFromHex(hexColor);
}

// Update RGB color based on slider values
const updateRGBColor = () => {
  const rgbColor = `rgb(${red.value}, ${green.value}, ${blue.value})`;
  rgbContainer.style.backgroundColor = rgbColor;
  rgbColorCode.innerText = rgbColor;
};

// Attach slider event listeners
red.addEventListener("input", updateRGBColor);
green.addEventListener("input", updateRGBColor);
blue.addEventListener("input", updateRGBColor);

// Function to convert HEX to RGB
function updateRGBFromHex(hexColor) {
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);

  // Update RGB sliders and display
  red.value = r;
  green.value = g;
  blue.value = b;
  updateRGBColor();
}

// Copy HEX color code on click
hexColorCode.addEventListener("click", () => copyToClipboard(hexColorCode));

// Copy RGB color code on click
rgbColorCode.addEventListener("click", () => copyToClipboard(rgbColorCode));

// Copy to clipboard function
function copyToClipboard(element) {
  navigator.clipboard
    .writeText(element.innerText)
    .then(() => {
      copyMessage.style.display = "block";
      setTimeout(() => {
        copyMessage.style.display = "none";
      }, 2000);
    })
    .catch((err) => console.error("Error copying text: ", err));
}
