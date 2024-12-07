// Everything after double forward slashes is a natural language comment.
// Read the comments carefully: they explain the JavaScript code.

// Variable is a symbolic name for a value.
// Variables are declared with the var keyword:
var x; // Declares a variable named x.

// Values ​​can be assigned to variables with the = sign.
x = 0; // Now the variable x has the value 0.
x // => 0: A variable is evaluated with its value.

// JavaScript accepts several types of values.
x = 1; // Numbers.
x = 0.01; // Only one Number type for integers and reals.
x = "hello world"; // Text strings enclosed in quotes.
x = 'JavaScript'; // Apostrophes also delimit strings.
x = true; // Boolean values.
x = false; // The other boolean value.

x = null // Null is a special value that means "Non-value".
x = undefined // Undefined is like null.

// The most important data type in JavaScript is the object.
// An object is a collection of name/value pairs or a string to value map.
var book = {
  // Objects are enclosed in curly braces.
  topic: "JavaScript", // The "topic" property has the value "JavaScript".
  fat: true // The "fat" property has the value true.
}; // The curly brace marks the end of the object.

// Access an object's properties with . or []:
book.topic  // => "JavaScript"
book["fat"] // => true: another way to access property values.
book.author = "Flanagan"; // Create new properties via assignment. 
book.contents = {}; // Its a empty object without any properties.


