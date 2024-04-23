"use strict";

const numInput = document.getElementById('number');
const convertButton = document.getElementById('convert-btn');

const conversions =
[
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1],
];


//Numbers to test:
// -1 0
// 4000 0
// 4001 0
// 9 0
// 16 0
// 649 0
// 1023 X should be MXXIII
// 3999 X should be MMMCMXCIX

const convertToRoman = () => {
    let romanString = '';
    let runningVal = numInput.value;
    if(runningVal < 1) {
        console.log("Please enter a number greater than or equal to 1");
        return;
    } else if(runningVal >= 4000) {
        console.log("Please enter a number less than or equal to 3999");
        return;
    } else {
        while(runningVal > 0) {
            for(const conversion of conversions) {
                if(runningVal >= conversion[1]) {
                    console.log(`${runningVal} is greater or equal to ${conversion[1]}`);
                    runningVal -= conversion[1];
                    romanString += conversion[0];
                    break;
                };
            };
        }
        console.log(`The Roman numeral for ${numInput.value} is ${romanString}`);
    }
    return romanString;
};



convertButton.addEventListener("click", convertToRoman);