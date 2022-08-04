"use strict";

// Counter
let oldCount = 0;
let count = 0;

function minusFive() {
    oldCount = count;
    count -= 5;
    document.getElementById("counter").innerHTML = `count: ${count}`
}

function minusOne() {
    oldCount = count;
    count -= 1;
    document.getElementById("counter").innerHTML = `count: ${count}`;
}

function reset() {
    oldCount = count;
    count = 0;
    document.getElementById("counter").innerHTML = `count: ${count}`;
}

function plusOne() {
    oldCount = count;
    count += 1;
    document.getElementById("counter").innerHTML = `count: ${count}`;
}

function plusFive() {
    oldCount = count;
    count += 5;
    document.getElementById("counter").innerHTML = `count: ${count}`;
}


// History
function updateHistory() {

    const element = document.createElement("li");
    const event = document.createTextNode(`${oldCount} => ${count}`);
    element.appendChild(event);

    const delEventButton = document.createElement("button");
    const text = document.createTextNode("Delete");
    delEventButton.appendChild(text);
    element.appendChild(delEventButton);

    delEventButton.addEventListener("click", function() {
        element.remove();
    })

    document.getElementById("counter-history").appendChild(element);
}

function deleteHistory() {
    document.getElementById("counter-history").innerHTML = "";
}

