"use strict";
const anchor = document.querySelector("a");
// const anchor = document.querySelector("a")!; //! !shows it will certainly have an a tag
// console.log(anchor.href); //anchor is possibly null
console.log(anchor);
console.log(anchor === null || anchor === void 0 ? void 0 : anchor.href); //anchor is possibly null
//using class, typescript will not know if it is a form!=> type casting
const form = document.querySelector(".new-item-form");
//inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber, typeof amount.valueAsNumber);
});
