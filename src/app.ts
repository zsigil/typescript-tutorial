const anchor = document.querySelector("a");

// const anchor = document.querySelector("a")!; //! !shows it will certainly have an a tag
// console.log(anchor.href); //anchor is possibly null

console.log(anchor);
console.log(anchor?.href); //anchor is possibly null

//classes

class Invoice {
  client: string;
  details: string;
  amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  format() {
    return `${this.client} ows $${this.amount} for ${this.details}`;
  }
}

const inv1 = new Invoice("Mario", "work on the Mario website", 2000);
const inv2 = new Invoice("Thomas", "work on the Thomas website", 3400);

let invoices: Invoice[] = [];

inv1.client = "yoshi"; // OK, public!!!

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
