const anchor = document.querySelector("a");

// const anchor = document.querySelector("a")!; //! !shows it will certainly have an a tag
// console.log(anchor.href); //anchor is possibly null

console.log(anchor);
console.log(anchor?.href); //anchor is possibly null

//classes

class Invoice {
  // readonly client: string;
  // private details: string;
  // amount: number;

  //this way constructor automatically assigns data to these names
  //we need the modifiers!
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} ows $${this.amount} for ${this.details}`;
  }
}

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
