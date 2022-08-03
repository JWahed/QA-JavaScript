"use strict";

// Task 1

function h1Adder(text) {
    const a = document.createElement("h1");
    const b = document.createTextNode(text);
    a.appendChild(b);
    document.body.appendChild(a);
}

h1Adder("Howdy!");
