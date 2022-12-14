var character = "mario"; //string
var age = 30; //number
var isBlackBelt = false; //boolean
// character = 8; won't work, because type is string
character = "luigi"; //will work
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(5));
//arrays
var names = ["luigi", "mario", "yoshi"];
names.push("jack"); //ok
//names.push(3); //not ok
//if we want mixed array, declare at initialization
var mixed = ["luigi", 3, 4, "sarah"];
mixed.push(3);
mixed.push("jack");
mixed[0] = 1;
// objects
var ninja = {
    name: "mario",
    belt: "black",
    age: 30
};
ninja.name = "kate";
ninja.age = 40;
// ninja.age = 'ryu' //not working
// ninja.skills = ['fighting', 'sneaking'] //this property does not exist, won't work
//the ninja object can be changed, but properties must remain the same
ninja = {
    name: "yoshi",
    belt: "orange",
    age: 30
};
//! EXPLICIT TYPES
var character2;
var age2;
var isLoggedIn;
// age2 = 'luigi' //not working
//arrays
var ninjas = []; //this will be an empty array
//union types
var mixed2 = [];
mixed2.push("hello"); //ok
mixed2.push(3); //ok
// mixed2.push(true) //not ok
var uid;
uid = "123";
uid = 23;
//objects
var ninjaOne;
ninjaOne = { name: "yoshi", age: 30 };
ninjaOne = []; //!WORKS!!! arrays are objects
var ninjaTwo;
// ninjaTwo = {} //won't work
//! DYNAMIC TYPE
//! only use if it is absolutely necessary
var age3 = 25;
age3 = "hello"; //this is ok
var mixed3 = [];
