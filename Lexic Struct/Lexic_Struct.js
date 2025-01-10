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

// JavaScript also accepts arrays (numerically indexed lists) of values.
var primes = [2, 3, 5, 7]; // An array of 4 values, delimited with "[  ]".
primes[0]   // => 2: The primary element (index 0) of Array.
primes.length // => 4: Elements quantities in Array.
primes[primes.length - 1]; // => 7: The last element of the Array.
primes[4] = 9; // => 9: Add a new element through assignment.
primes[4] = 11 // => 11: Or modify existing elements through assignment.
var empty = []; // [] => It's an Empty Array, without any element.
empty.length // => 0

// The objects and Arrays can be contain another Arrays and objects.

var points = [ // An Array with two elements.
  { x: 0, y: 0 }, // Each elements is an Object.
  { x: 1, y: 1 }
];

var data = { // An Object with two properties
  trial1: [[1, 2], [3, 4]], // The value of each property is an Array.
  trial2: [[2, 3], [4, 5]] // The elements of Arrays are Arrays.
};

// Operators act on values ​​(operands) to produce a new value.
// Arithmetic operators are the most common:
3 + 2 // => 5: Addition.
3 - 2 // => 1: Subtraction.
3 * 2 // => 6: Multiplication. 
3 / 2 // => 1.5: Division.
points[1].x - points[0].x // => 1: More complicated operands also work.
"3" + "2" // => "32": + Adds numbers, or concatenates Strings.

// JavaScript defines some arithmetic operators in shorthand form.
var count = 0; // => Define a variable.
count++ // => Increments a Variable.
count-- // => Decrements a Variable.
count += 2 // => Adds 2: The same that count = count + 2;
count *= 3 // => Multiply by 3: The same that count = count * 3;
count // => 6: Variable names are also expressions.

// The iguality and relational operators testing if two values are equals,
// unequal, less than, greater than, etc. Evaluate as true or false.
var x = 2, y = 3; // These signs = Are attributions and not a testings of equality

x == y // => false: Equality.
x != y // => true: Inequality.
x < y // => true: Less than.
x > y // => false: Greater than.
x <= y // => true: Less than or equal to.
x >= y // => false: Greater than or equal to.
"two" == "three" // => false: This Strings are differents.
"two" > "three" // => true: "tw" is alphabetically greater than "th".
false == (x > y) // true: false is equal to false.

  // Logical operators combine or invert boolean values.
  (x == 2) && (y == 3) // => true: The both comparacions are true.
    (x > 3) || (y < 3)  // => false: None of comparacions are true.
!(x == y)  // => true: ! invert boolean value.

// Functions are code blocks in JavaScript parameterized that we can call.

function plus1(x) { // Define a function called "plus1", with parameter "x"
  return x + 1; // Returns a value one unit greater than what was passed
} // Functions are enclosed in curly braces

plus1(y); // => 4: y is 3; Therefore, this called return 3+1

var square = function (x) { // Functions are values ​​and can be assigned to variables
  return x * x; // Calculates the function value.
}; // A semicolon marks the end of the assignment.

square(plus(y)) // => 16: Call two functions in one expression

// When functions receive the properties of an object, we call them "methods". All JavaScript objects have methods:

var a = []; // Creates an empty array
a.push(1, 2, 3); // The push() method adds elements to an array
a.reverse(); // Another method: reverses the order of the elements

// We can also define our own methods. The word-key "this" refer for object
// In which the method is define: In that caso, the points array before.

points.dist = function () { // Define method to calculate the distance between points

  var p1 = this[0]; // Fist element that we call.
  var p2 = this[1]; // Second element  of "this" object.
  var a = p2.x - p1.x; // Difference in x coordinate.
  var b = p2.y - p1.y; // Difference in y coordinate.
  return Math.sqrt(a * a + b * b); // Pythagoras theorem; Math.sqrt() calculates square root.
};

points.dist() // => 1,1414: Distance between our two points 

// Functions are included conditional ties that utilize sintaxe of languages C, C++, Java and more.
function abs(x) {
  if (x >= 0) {
    return x;
  } else {
    return -x;
  }

}