// Array of image file names in the folder
const images = ["vapor11_1920x1200.png", "vapor100_1920x1200.png", "vapor103_1920x1200.png", "vapor104_1920x1200.png", "vaporlake_1920x1200.png", "vaporlock_1920x1200.png"];

// Get a random image from the array
const randomImage = images[Math.floor(Math.random() * images.length)];

// Set the background image for the :root element
document.documentElement.style.setProperty(
  "background-image",
  `url('./images/bg/${randomImage}')`
);