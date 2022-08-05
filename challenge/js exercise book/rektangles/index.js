"use strict";


// Level 3
// Rektangles

function rektangles(word, width, height) {

    const wl = word.length;
    const indexL = wl - 1;

    let arr = new Array((wl * height) - (height - 1));
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array((wl * width) - (width - 1));
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {

            let difference = i - j > 0 ? i - j : i - j * - 1;

            if (i % indexL == 0 || j % indexL == 0) {
                if (difference > indexL) {
                    if (difference % (indexL * 2) < wl) {                                        

                        arr[i][j] = word.charAt(difference % (indexL * 2));
                    
                    } else {

                        arr[i][j] = word.charAt((indexL * 2) - (difference % (indexL * 2)));
                    }
                } else {
                    
                    arr[i][j] = word.charAt(difference);
                }
            } else {
                arr[i][j] = " ";
            }
        }
    }
    console.log(arr);
}

rektangles("REKT", 2 , 2);