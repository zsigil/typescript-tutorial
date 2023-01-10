import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

//using css class, typescript will not know if it is a form!=> type casting
const form = document.querySelector(".new-item-form") as HTMLFormElement;

//inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// list template instance
const ul = document.querySelector("ul")!; //it is sure we have an 'ul'
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }
  list.render(doc, type.value, "end");
});

//GENERICS
//reusable blocks of code,that can be used with different types

const addUID = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let doc1 = addUID({ name: "yoshi", age: 40 });
console.log(doc1.name); // will not work without generic

interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}

const doc3: Resource<string> = {
  uid: 1,
  resourceName: "person",
  data: "mydata",
};

const doc4: Resource<string[]> = {
  uid: 2,
  resourceName: "yoshi",
  data: ["string1"],
};

//ENUMS
enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
}

interface ResourceTwo<T> {
  uid: number;
  resourceType: ResourceType;
  data: T;
}

const doc5: ResourceTwo<string> = {
  uid: 1,
  resourceType: ResourceType.BOOK,
  data: "mydata",
};

console.log(doc5); //0
