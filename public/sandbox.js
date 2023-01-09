"use strict";
//FUNCTION SIGNATURES
let greet;
greet = (name, greeting) => {
    console.log(`${greeting}, ${name}`);
};
let calc;
calc = (num1, num2, action) => {
    if (action == "add") {
        return num1 + num2;
    }
    else {
        return num1 - num2;
    }
};
let logDetails;
logDetails = (ninja) => {
    console.log(ninja.name);
    console.log(ninja.age);
};
