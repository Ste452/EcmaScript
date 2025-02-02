function moveon() {
    // Display a modal dialog box to ask the user a question
    var answer = confirm("Ready to move on?");
    // If the user clicked the "OK" button, make the browser load a new page
    if (answer) window.location = "http://google.com";
}
// Run the function defined above for 1 minute (60,000 milliseconds) from now.
setTimeout(moveon, 60000);

function hide(e, reflow) { // Hide the element and script its style
    if (reflow) {
        // If the 2nd argument is true
        e.style.display = "none"
    }
    else {
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