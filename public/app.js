import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
//using css class, typescript will not know if it is a form!=> type casting
const form = document.querySelector(".new-item-form");
//inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// list template instance
const ul = document.querySelector("ul"); //it is sure we have an 'ul'
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    //has to be tuple
    let values = [
        tofrom.value,
        details.value,
        amount.valueAsNumber,
    ];
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, "end");
});
//GENERICS
//reusable blocks of code,that can be used with different types
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let doc1 = addUID({ name: "yoshi", age: 40 });
console.log(doc1.name); // will not work without generic
const doc3 = {
    uid: 1,
    resourceName: "person",
    data: "mydata",
};
const doc4 = {
    uid: 2,
    resourceName: "yoshi",
    data: ["string1"],
};
//ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const doc5 = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: "mydata",
};
console.log(doc5); //0
//tuples
let arr = ["ryu", 2, true]; //any of these types can be in any position
arr[0] = false; //ok
arr[1] = "yoshi"; //ok
arr = [30, false, "Bob"];
//in tuple, type in that position cannot change
let tup = ["ryu", 40, false];
//tup[0] = false; // will not work
