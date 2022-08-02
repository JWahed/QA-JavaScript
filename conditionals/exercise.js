// Task 1
// What are the return values of the following code?

let strictA = true;
let strictB = 1;

console.log(strictA == strictB); // returns true
console.log(strictA === strictB); // returns false


// Task 2
// Considering the following code, what will be the results be?

console.log(strictA != strictB); // returns false
console.log(strictA !== strictB); // returns true


/*
    Task 3

    Create a IF statement that satifies the following:
    Declare a variable age
    Write a condition that checks if age is between 18 AND 65
    Return a value in each case where the condition is satisfied and not satisfied.
    Extra: Consider the case where age is less than 18 - return 'underage'.
*/

let age1 = 10;

if (age1 >= 18 && age1 <= 65) {
  console.log("Age is in range");
} else if (age1 < 18) {
  console.log("Underage");
} else {
  console.log("Catch all else");
}


// Task 4
// Using ternary-if syntax, write code that checks if age is above 50.

let age2 = 100;
let result = age2 >= 50 ? "50 or over" : "Under 50";
console.log(result);

