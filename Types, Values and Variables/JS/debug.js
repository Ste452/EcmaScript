// Displays a message in a special debug output section of the document.
// If the document does not contain such a section, create one.
function debug(msg) {
  // Locates the debug section of the document by examining the HTML
  // identification attributes
  var log = document.getElementById("debuglog"); // If there is no element with the identification "debuglog", create one.

  if (!log) {
    log = document.createElement("div"); // Create a new <div> element
    log.id = "debuglog";

    // Set the HTML identification attribute on it
    log.innerHTML = "<h1>Debug Log</h1>"; // Set the initial content
    document.body.appendChild(log);
  } // Add it to the end of the document

  // Now, put the message in its own <pre> and append it to the log
  var pre = document.createElement("pre"); // Create a <pre> tag
  var text = document.createTextNode(msg); // Place the msg in a text node
  pre.appendChild(text);

  // Add the text to the <pre>
  log.appendChild(pre);

  function debug(message) {
    var log = $("#debuglog");
    if (log.length == 0) {
      // Find the element to display the message.
      // If it doesn't exist yet, create it...
      log = $("<div id='debuglog'><h1>Debug log</h1></div>");
      log.appendTo(document.body);
      // and insert it at the end of the body.
    }
    log.append($("<pre/>").text(msg));
  }
}
