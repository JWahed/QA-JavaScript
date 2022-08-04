"use strict";


// Task 1
document.querySelector("button#textColour").addEventListener("click", changeText);

function changeText() {
    
    document.querySelector("#blueText").style.color = "red";
    document.querySelector("#blueText").textContent = document.querySelector("#blueText").textContent.replaceAll("blue", "red");
}


// Task 2
document.querySelector("button#bgColour").addEventListener("click", changeBg);

function changeBg() {
    
    const oldParas = document.querySelectorAll(".greenBg");

    for (let para of oldParas) {
        para.className = "hotpinkBg";
        para.textContent = para.textContent.replace("green", "hotpink");
    }
}


// Task 3
document.querySelector("button#fonts").addEventListener("click", changeFont);

function changeFont() {
    
    const oldText = document.querySelector("#tnrParagraph");

    oldText.style.fontFamily = "arial";
    oldText.textContent = oldText.textContent.replace("Time's New Roman", "Arial");
}
