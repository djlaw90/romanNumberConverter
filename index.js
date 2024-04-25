"use strict";

const numInput = document.getElementById('number');
const convertButton = document.getElementById('convert-btn');
const output = document.getElementById('result');
const convertForm = document.getElementById('convert-form');

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

const convertToRoman = (e) => {
    e.preventDefault();
    let romanString = '';
    let runningVal = numInput.value;
    if(runningVal < 1 || isNaN(runningVal)) {
        output.innerText = "Please enter a number greater than or equal to 1";
        
        return;
    } else if(runningVal >= 4000) {
        output.innerText = "Please enter a number less than or equal to 3999";
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
        output.innerHTML = `<p>The Roman numeral for ${numInput.value} is <br><div id="roman-string">${romanString}</div></p>`;
    }
    numInput.value = '';
    return romanString;
};



convertButton.addEventListener("click", convertToRoman);