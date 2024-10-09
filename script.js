const hexContainer = document.querySelector(".hex-color");
const rgbContainer = document.querySelector(".rgb-color");

const colorButton = document.getElementById("colorButton");
const hexColorCode = document.getElementById("hexColorCode");
const rgbColorCode = document.getElementById("rgbColorCode");
const copyMessage = document.getElementById("copyMessage");

const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

// Generate Random HEX Color
colorButton.addEventListener("click", () => {
  const hexColor = generateRandomHexColor();
  hexContainer.style.backgroundColor = hexColor;
  hexColorCode.innerText = hexColor;
});

// Convert to Random HEX Color
function generateRandomHexColor() {
  const characters = "0123456789ABCDEF";
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += characters[Math.floor(Math.random() * characters.length)];
  }
  return hexColor;
}

// Update RGB Color
const updateRGBColor = () => {
  const rgbColor = `rgb(${red.value}, ${green.value}, ${blue.value})`;
  rgbContainer.style.backgroundColor = rgbColor;
  rgbColorCode.innerText = rgbColor;
};

// Attach slider event listeners
red.addEventListener("input", updateRGBColor);
green.addEventListener("input", updateRGBColor);
blue.addEventListener("input", updateRGBColor);

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
