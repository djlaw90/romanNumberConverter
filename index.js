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

const convertToRoman = () => {
    let romanString = '';
    let runningVal = numInput.value;
    while(runningVal > 0) {
        conversions.forEach((conversion) => {
            if(runningVal >= conversion[1]) {
                console.log(`${runningVal} is greater or equal to ${conversion[1]}`);
                runningVal -= conversion[1];
                romanString += conversion[0];
            };
        });
    }
    console.log(`The Roman numeral for ${numInput.value} is ${romanString}`);
    return romanString;
};



convertButton.addEventListener("click", convertToRoman);