const me = {
    name: "Ildi",
    age: 42,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        return amount;
    },
};
const greetPerson = (person) => {
    console.log("hello", person.name);
};
greetPerson(me);
import { Invoice } from "./classes/Invoice.js"; //.js when importing!!!
const inv1 = new Invoice("Mario", "work on the Mario website", 2000);
const inv2 = new Invoice("Thomas", "work on the Thomas website", 3400);
let invoices = [];
invoices.push(inv1);
invoices.push(inv2);
//inv1.client = "yoshi"; // READONLY!
invoices.forEach((inv) => {
    //cannot access inv.details
    console.log(inv.client, inv.amount, inv.format());
});
//using css class, typescript will not know if it is a form!=> type casting
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
