// Task 1
// Declare a few variables / code blocks and terminate the code appropriately

console.log("string");
console.log(12515);
console.log(false);


// Task 2
// Remove the semi-colons from the variables / code-blocks that you've written and see if there is an affect on the output

// observation: no change
console.log("string")
console.log(12515)
console.log(false)


// Task 3
// Have a look at the below code and try to spot where there might be an error:

// observation: return string is placed below return statement therefore becoming unreachable as semi colon is automatically inserted
function sayHello() {
    return
    {
      "Someone says hello";
    }
  }

