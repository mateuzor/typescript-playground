export {};

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

// const product = {
//   productName: "Soap",
//   price: -1,
//   validateProduct() {
//     if (!this.productName || this.productName.trim().length === 0) {
//       fail("Its needs a name");
//     }
//     if (this.price <= 0) {
//       fail("Invalid price");
//     }
//   },
// };

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

// as type assertion
// basically what this does is, trust me I know what I am doing
const value: any = "Hello my friend";
const size = (value as string).length;

// as any
// disables type checking
const x = "Mateus" as any;
// x.somethingNonExistent(); // no error in compilation time

// as const
// it makes a vlue immutable and literal
const requestStatus = "success" as const;

// non null assertion
let myName: string | null = null;

// we use the non-null assertion operator to tell the compiler that name will never be null

// let nameLength = myName!.length;

const input = document.querySelector("input");

// Non-null Assertion
// Without the "!", TypeScript warns that `input` might be null

// input!.focus();

// The "!" operator asserts that input is definitely not null

// satisgies keyword
type SomeUser = {
  id: number;
  name: string;
};

// Without `satisfies`, using `as User` would widen types and lose literal values
const Someuser = {
  id: 1,
  name: "Alice",
} satisfies SomeUser; // Ensures the object matches the User type, while preserving exact value types

// Type intersection
interface A {
  a: string;
}

interface B {
  b: number;
}

type AB = A & B; // we use the operator &
let combinedValue: AB = { a: "hello", b: 42 };
console.log(combinedValue);

// The instanceof operator is a way to narrow down the type of a variable. It is used to check if an object is an instance of a class.
class Bird {
  fly() {
    console.log("flying...");
  }
  layEggs() {
    console.log("laying eggs...");
  }
}

const pet = new Bird();

// instanceof
if (pet instanceof Bird) {
  pet.fly();
} else {
  console.log("pet is not a bird");
}

function isString(value: unknown): value is string {
  return typeof value === "string";
}

function example(x: unknown) {
  if (isString(x)) {
    // We can now call any 'string' method on 'x'.
    x.toUpperCase();
  } else {
    console.log(x);
  }
}

// Type predicate
type Animal = Fish | Bird;

interface Fish {
  swim: () => void;
}

interface Bird {
  fly: () => void;
}

function doSomething(animal: Animal) {
  // How can we tell if 'animal' is a Fish or a Bird here?
  // We need a way to narrow down the type.
}

function isFish(animal: Animal): animal is Fish {
  // we explicit tell the animal type here
  return (animal as Fish).swim !== undefined; // as is optional and make it safer
}

// function overloading
function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a: any, b: any): any {
  // it works because it cover all signatures
  return a + b;
}

console.log(add(1, 2)); // 3
console.log(add("Hello", " World")); // "Hello World"

// types vs itnerfaces
type ID = number | string;

type Person1 = {
  name: string;
  age: number;
};

interface Person2 {
  // can only describre objects and classes, it can be extended
  // no union, intersection, typeof
  name: string;
  age: number;
}

//extending example
interface Shape {
  width: number;
  height: number;
}

interface Square extends Shape {
  sideLength: number;
}

let square: Square = {
  width: 10,
  height: 10,
  sideLength: 10,
};

console.log(square);

// access modifiers
// private
class Animal2 {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  private speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal2 {
  constructor(name: string) {
    super(name);
  }

  bark() {
    // console.log(this.name); // ❌ Error: 'name' is private
    // this.speak();            // ❌ Error: 'speak' is private
  }
}

// protected
class Animal3 {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Dog3 extends Animal3 {
  bark() {
    console.log(`${this.name} barks.`); // ✅ OK: name is protected
  }
}

const dog = new Dog("Rex");
// console.log(dog.name); // ❌ Error: 'name' is protected
