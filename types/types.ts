// string
let userName: string = "Mateus";
console.log(userName);
// userName = 28

// numbers
let age: number = 27;
// age = 'Ana'
age = 27.5;
console.log(age);

// boolean
let hasHobbies: boolean = false;
// hasHobbies = 1
console.log(hasHobbies);

// explicit types
let myAge: number;
myAge = 27;
console.log(typeof myAge);
// myAge = 'age is 33'

// array
let hobbies: any[] = ["Cook", "Play Sports"];
console.log(hobbies[0]);
console.log(typeof hobbies);

hobbies = [100, 200, 300];
// hobbies = 100
console.log(hobbies);

// tuples
let address: [string, number, string] = ["Main Avenue", 99, ""];
console.log(address);

address = ["Important Street", 1260, "Block C"];
console.log(address);

// enums
enum Color {
  Grey, // 0
  Green = 100, // 100
  Blue = 10, // 10
  Orange,
  Yellow,
  Red = 100,
}

let myColor: Color = Color.Blue;
console.log(myColor);

console.log(Color.Blue);
console.log(Color.Orange, Color.Yellow);
console.log(Color.Green, Color.Red);

// any
let car: any = "BMW";
console.log(car);
car = { brand: "BMW", year: 2019 };
console.log(car);

// functions
function returnMyName(): string {
  // return myAge
  return userName;
}

console.log(returnMyName());

function sayHi(): void {
  console.log("Hi");
  // return myAge
}

sayHi();

function multiply(numA: any, numB: any): number {
  return numA * numB;
}

// console.log(multiply(2, 'Bia'))
console.log(multiply(4.7, 9));

// function type
let calculation: (x: number, y: number) => number;
// calculation = sayHi
// calculation()
// calculation = {}

calculation = multiply;
console.log(calculation(5, 6));

// objects
let user: { name: string; age: number } = {
  name: "John",
  age: 27,
};

console.log(user);
// user = {}

// user = {
//     name: 'Maria',
//     age: 31
// }

user = {
  age: 31,
  name: "Maria",
};
console.log(user);

// Challenge
/*
    Create an employee object with:
        - Array of strings with the names of the supervisors
        - Clock-in function that receives the time (number)
            and returns a string
            -> Normal shift (<= 8)
            -> Outside working hours (> 8)
*/

let employee: {
  supervisors: string[];
  clockOut: (hours: number) => string;
} = {
  supervisors: ["Anna", "Fernando"],
  clockOut(time: number): string {
    if (time <= 8) {
      return "Normal shift";
    } else {
      return "Outside working hours!";
    }
  },
};

console.log(employee.supervisors);
console.log(employee.clockOut(8));
console.log(employee.clockOut(9));

// employee = {}

//Alias - creating a custom type an using on our Employee type

type Employee = {
  supervisors: string[];
  clockOut: (hours: number) => string;
};

let employee2: Employee = {
  supervisors: ["Anna", "Fernando"],
  clockOut(time: number): string {
    if (time <= 8) {
      return "Normal shift";
    } else {
      return "Outside working hours!";
    }
  },
};

// Union Types
let grade: string | number = "15";

console.log("grade", grade);

// Never - means a function or expression will never return a valid value.
// be it a an error throw, a loop or its never called in a valid way, e.g an
// valor out of a union type being passed to a function.

function fail(msg: string): never {
  throw new Error(msg);
}

const product = {
  productName: "Soap",
  price: -1,
  validateProduct() {
    if (!this.productName || this.productName.trim().length == 0) {
      fail("Its needs a name");
    }
    if (this.price <= 0) {
      fail("Invalid price");
    }
  },
};

// console.log(product.validateProduct());

// null type
let motherName = null; // any
motherName = 12;
motherName = true;

// Desafio

type BankAccount = {
  balance: number;
  deposit: (amount: number) => void;
};

type AccountHolder = {
  clientName: string;
  bankAccount: BankAccount;
  contacts: string[];
};

let bankAccount: BankAccount = {
  balance: 3456,
  deposit(amount: number) {
    this.balance += amount;
  },
};

let correntista: AccountHolder = {
  clientName: "Ana Silva",
  bankAccount: bankAccount,
  contacts: ["34567890", "98765432"],
};

correntista.bankAccount.deposit(3000);
console.log(correntista);
