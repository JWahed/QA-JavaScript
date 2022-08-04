"use strict";
// Level 3 Advanced
// Rektangles


function rektangles(word, width, height) {

    const end = word.length - 1;
    const doubleEnd = end * 2;

    // 1d array
    let arr = new Array((word.length * height) - (height - 1));

    // 2d array
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array((word.length * width) - (width - 1));
    }
    arrText

    for (let i = 0; i < arr.length; i++) {
        
        for (let j = 0; j < arr.length; j++) {
            
            if (  ((i % word.length - 1) !== 0)  &&  ((j % word.length - 1) !== 0)   ) {
                arr[i][j] = " ";
            }

            const diff = Math.abs(i - j);

            arr[i][j] = diff > end ? word.charAt(diff % doubleEnd < word.length ? diff % doubleEnd : doubleEnd - (diff % doubleEnd)) : word.charAt();

        }
        console.log
    }


}

rektangles("REKT", 2, 2);