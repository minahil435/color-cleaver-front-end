const colorCombinator = require("./color-combinator.js");
const colorDeconstructor = require("./color-deconstructor.js");
const isValidPrimary = require("./is-valid-primary.js");
const isValidSecondary = require("./is-valid-secondary.js");
const getInput = require("./get-input.js");

// Your code here!


let firstColor = getInput(1);
firstColor = firstColor.toLowerCase();

let secondColor = getInput(2);
if (secondColor !== undefined) {
secondColor = secondColor.toLowerCase();}

if (firstColor === undefined) {
    console.log("We need atleast one color");
}
else if (secondColor === undefined) {
    const resultOfcolorDeconstructor = colorDeconstructor(firstColor);
    if (resultOfcolorDeconstructor !== undefined) {
        console.log("The color " + firstColor + " " + "is the combination of " + resultOfcolorDeconstructor);
    }
    else {
        console.log("The color " + firstColor + " is not a primary color");
    }
}
else {
    const resultOfcolorCombinator = colorCombinator(firstColor, secondColor);
    if (resultOfcolorCombinator !== undefined) {
        const resultOfcolorCombinator = colorCombinator(firstColor, secondColor);
        console.log("The colors," + firstColor + " and " + secondColor + " when combined result in  " + resultOfcolorCombinator);
    }
    else {
        if (!(isValidSecondary(firstColor))) {
            console.log("The color " + firstColor + " is not a secondary color");
        }
        else {
            console.log("The color " + secondColor + " is not a secondary color");
        }

    }
}
