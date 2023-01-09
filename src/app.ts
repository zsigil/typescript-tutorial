//interfaces
interface isPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: isPerson = {
  name: "Ildi",
  age: 42,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    return amount;
  },
};

const greetPerson = (person: isPerson) => {
  console.log("hello", person.name);
};

greetPerson(me);

import { Invoice } from "./classes/Invoice.js"; //.js when importing!!!

const inv1 = new Invoice("Mario", "work on the Mario website", 2000);
const inv2 = new Invoice("Thomas", "work on the Thomas website", 3400);

let invoices: Invoice[] = [];
invoices.push(inv1);
invoices.push(inv2);

//inv1.client = "yoshi"; // READONLY!

invoices.forEach((inv) => {
  //cannot access inv.details
  console.log(inv.client, inv.amount, inv.format());
});

//using css class, typescript will not know if it is a form!=> type casting
const form = document.querySelector(".new-item-form") as HTMLFormElement;

//inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(
    type.value,
    tofrom.value,
    details.value,
    amount.valueAsNumber,
    typeof amount.valueAsNumber
  );
});
