// Task 1

function test() {

    let x = "foo";
    
    if (x.charAt(0) === x.charAt(8).toLowerCase) {    
        let y = "bar";
    }

    console.log(x); // Output: foo
    console.log(y); // Output: ReferenceError: y is not defined
}

test();


// Task 2

function doSomething() {
    console.log(a);         // ouput is a reference error as this line is attempting to acces variable a before it is declared
    console.log(foo());
    let a = 1; 
    function foo() {
      return 2;
    }
  }
doSomething();