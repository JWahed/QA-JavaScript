"use strict";

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

function updateHistory() {
    const history = document.createElement("li");
    const event = document.createTextNode(`${oldCount} => ${count}`);

    history.appendChild(event);
    
    document.getElementById("history").appendChild(history);
}

function deleteHistory() {
    document.getElementById("history").innerHTML = "";

}

