function moveon() {
  // Display a modal dialog box to ask the user a question
  var answer = confirm("Ready to move on?");
  // If the user clicked the "OK" button, make the browser load a new page
  if (answer) window.location = "http://google.com";
}
// Run the function defined above for 1 minute (60,000 milliseconds) from now.
setTimeout(moveon, 60000);

function hide(e, reflow) {
  // Hide the element and script its style
  if (reflow) {
    // If the 2nd argument is true
    e.style.display = "none";
  } else {
    e.style.visibility = "hidden";
  }
}

function highlight(e) {
  // Hide the element and use its space Otherwise
  // Make e invisible, but leave its space Highlight and by setting a CSS class
  // Just set or append to the HTML class attribute.
  // This assumes that a CSS stylesheet already defines a "hilite" class
  if (!e.className) e.className = "hilite";
  else e.className += "hilite";
}

// The "load" event occurs when a document is fully loaded. Typically,
// we need to wait for this event before we can start executing our
// JavaScript code.

window.onload = function () {
  // Execute function when document will be loading

  // Find all brands <img> in the document
  var images = document.getElementsByTagName("img");

  // Loop them, adding a "click" event handler for each image click to hide it.
  for (i = 1; i <= images.length; i++) {
    var image = images[i];
    if (image.addEventListener) {
      // Another way to register routine of treatment
      image.addEventListener("click", hide, false);
    } else {
      // For compability with the IE8 and previous

      image.attachEvent("onclick", hide);
    }
  }

  function hide(event) {event.target.style.visibility = "hidden"}
};
