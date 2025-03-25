/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = "5" - 2;
console.log("The result is: " + result);
//I don't think there's an error in this first block? Javascript coerces the string "5" into a number, and the output for this block when I first ran this file in my terminal was "The result is: 3". Unless we want it to print out a number that is not mathematically correct, I'm not seeing an error here.

let isValid = Boolean(false);
if (isValid) {
    console.log("This is valid!");
}
else 
    console.log("false");
//This block originally returned "This is valid!" because the value "false" in the parentheses next to the Boolean function was a string. Javascript read this as a truthy value, and so it printed out the string in the console.log. To debug this, I removed the parentheses in "false". I added an "else" fuction to print out false to have the terminal explicity state that the variable was a false bool.

let age = "25";
age = Number(age);
let totalAge = age + 5;
console.log("Total Age: " + totalAge);
// To stop the program from string concantenating the variable "age" with the number it was adding to it in the third line (third line after I added my correction), I used the Number() operator to convert the value type to a number, which could then get added in correctly in the variable "totalAge"



//My explicit example

let students = "18";
let teachers = 4;
students = Number(students);
let allAttendees = students + teachers;
console.log(allAttendees);

//My implicit example

let pizzas = 3;
console.log(`You have ordered ${pizzas} pizzas today`);