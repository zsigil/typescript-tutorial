"use strict";
let greet;
greet = () => {
    console.log();
};
//c is optional parameter
// optional and default parameters go last
const add = (a, b, c) => {
    console.log(a + b);
    console.log(c); //undefined, if not passed in
};
add(5, 10);
//c is optional parameter, but has default value; NO '?' after c
//inferred return type: void
const add2 = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c); //10, if nothing is passed in
};
add2(5, 10);
//explicit return type
// 'void' : does not return anything, just does something
const minus = (a, b) => {
    return a - b;
};
let result = minus(10, 7);
