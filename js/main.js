////////////////////////
// Background changer //
////////////////////////

// Array of image file names in the folder
const images = ["vapor11_1920x1200.png", "vapor100_1920x1200.png", "vapor103_1920x1200.png", "vapor104_1920x1200.png", "vaporlake_1920x1200.png", "vaporlock_1920x1200.png"];

// Get a random image from the array
const randomImage = images[Math.floor(Math.random() * images.length)];

// Set the background image for the :root element
document.documentElement.style.setProperty(
  "background-image",
  `url('./images/bg/${randomImage}')`
);

///////////////////////////////////////////////////////////////////////////////////////////////////////
// Clock                                                                                             //
// Src: https://stackoverflow.com/questions/18536726/javascript-to-display-the-current-date-and-time //
// With edits from me adding updated time every second and symbols to mark date and time.            //
///////////////////////////////////////////////////////////////////////////////////////////////////////

function clock() {
  // get a new date (locale machine date time)
  var date = new Date();
  // get the date as a string
  var n = date.toDateString();
  // get the time as a string
  var time = date.toLocaleTimeString();
  // find the html element with the id of datetime
  // set the innerHTML of that element to the date a space the time
  document.getElementById('datetime').innerHTML = '&#128467; ' + n + '<br />' + '&#9202; ' + time;
}

// Update the clock every second.
// (Does this affect computer resources?)
window.setInterval(clock, 1000);