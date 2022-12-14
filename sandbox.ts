let character = "mario"; //string
let age = 30; //number
let isBlackBelt = false; //boolean

// character = 8; won't work, because type is string
character = "luigi"; //will work

const circ = (diameter: number): number => {
  return diameter * Math.PI;
};

console.log(circ(5));

//arrays
let names = ["luigi", "mario", "yoshi"];
names.push("jack"); //ok
//names.push(3); //not ok

//if we want mixed array, declare at initialization
let mixed = ["luigi", 3, 4, "sarah"];
mixed.push(3);
mixed.push("jack");
mixed[0] = 1;

// objects
let ninja = {
  name: "mario",
  belt: "black",
  age: 30,
};

ninja.name = "kate";
ninja.age = 40;
// ninja.age = 'ryu' //not working
// ninja.skills = ['fighting', 'sneaking'] //this property does not exist, won't work

//the ninja object can be changed, but properties must remain the same
ninja = {
  name: "yoshi",
  belt: "orange",
  age: 30,
};

//! EXPLICIT TYPES
let character2: string;
let age2: number;
let isLoggedIn: boolean;

// age2 = 'luigi' //not working

//arrays
let ninjas: string[] = []; //this will be an empty array

//union types
let mixed2: (string | number)[] = [];
mixed2.push("hello"); //ok
mixed2.push(3); //ok
// mixed2.push(true) //not ok

let uid: string | number;
uid = "123";
uid = 23;

//objects
let ninjaOne: object;
ninjaOne = { name: "yoshi", age: 30 };
ninjaOne = []; //!WORKS!!! arrays are objects

let ninjaTwo: {
  name: string;
  age: number;
  beltColor: string;
};

// ninjaTwo = {} //won't work
