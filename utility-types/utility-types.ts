// UTILITY TYPES

// Pick, is a type where I can create a type derivated from another type, just
// picking the values I want to

interface Car {
  brand: string;
  motor: string;
  fuel: string;
  year: number;
}

const MyCar: Pick<Car, "brand" | "year"> = {
  brand: "Chevrolet",
  year: 2020,
};

console.log(MyCar);

// Omit, similar to pick, but is this case we define the properties we'll omit.
interface LoginInfo {
  userName: string;
  password: string;
  createdAt: Date;
}

type userLogin = Omit<LoginInfo, "password">;

const myLogin: userLogin = {
  userName: "mateuzor@gmail.com",
  createdAt: new Date(),
};

console.log(myLogin);

// Record, is a type where we can create other types to create a new type key: value
type Role = "admin" | "user" | "guest";

const permissions: Record<Role, string[]> = {
  admin: ["read", "write", "delete"],
  user: ["read", "write"],
  guest: ["read"],
};

type UserInfo = {
  name: string;
  age: number;
};

type Users = Record<string, UserInfo>;

const users: Users = {
  user1: { name: "Mateus", age: 30 },
  user2: { name: "João", age: 25 },
};

// Readyonly, create with all the properties from another typ defined, but only for reading, it
// cannot be reassigned;

type Address = {
  street: string;
  number: number;
  city: string;
};

const myAddress: Readonly<Address> = {
  street: "Rua das gaivotas",
  number: 666,
  city: "Somewhere in the world",
};

// myAddress.number = 333;

// The Partial type in TypeScript allows you to make all properties of a type optional

interface House {
  bedrooms: number;
  bathrooms: number;
  doors: number;
  carsAvailability: number;
}

const logHouseSettings = (house: Partial<House>): string => {
  return `This house has ${house.bedrooms} bedrooms and ${house.bathrooms} bathrooms`;
};

console.log(
  logHouseSettings({
    bedrooms: 3,
    bathrooms: 2,
  })
);

// Exclude, basically its a way to create a new type based from a union type removing type I don't need/want to.
type Stacks = "javaScript" | "Java" | "Typescript" | "React" | "Rust";

type myStack = Exclude<Stacks, "Java" | "Rust">; // "javaScript" | "Typescript" | "React";

// const stack: myStack = "Java";
const stack: myStack = "React";

console.log(stack);

// Extract keep the elements which intersect between T and U

type AllRoles = "admin" | "user" | "guest";
type Restricted = "admin" | "owner";

type Allowed = Extract<AllRoles, Restricted>;
// Result - only admin which is present in both

type NotAllowed = Exclude<AllRoles, Restricted>;
// Result: "user" | "guest"

// ReturnType is a utility type that captures the return type of a function and creates a new type based on it.
// Some function
function sum(a: number, b: number) {
  return a + b;
}

// typeof pega o tipo da função
type SumFn = typeof sum;
// SumFn = (a: number, b: number) => number

// ReturnType pega só o retorno
type SumReturn = ReturnType<typeof sum>;
// SumReturn = number

// Awaited, used to capture a type of a async operation to create anew type,
// something we cannot achive using typeof, if its a async function it returns its value
async function getData() {
  return { ok: true, value: 123 };
}

// typeof -> function type
type Aa = typeof getData;
// A = () => Promise<{ ok: boolean; value: number }>

// ReturnType -> return type (Promise still wrapped)
type Bb = ReturnType<typeof getData>;
// B = Promise<{ ok: boolean; value: number }>

// Awaited + ReturnType -> valor final resolvido
type Cc = Awaited<ReturnType<typeof getData>>;
// C = { ok: boolean; value: number }

// InstanceType, its used to create a new type value from a instance
class User {
  constructor(public name: string, public age: number) {}
}

// Pega o tipo da instância da classe
type UserInstance = InstanceType<typeof User>;
/*
UserInstance = {
  name: string;
  age: number;
}
*/

// NON NULLABLE,
// its a utility that creates a new type by removing null and undefined from a certain type.

type RandomType = null | undefined | string;

type MyNotNullableType = NonNullable<RandomType>;

const notNullType: MyNotNullableType = "Mateus"; // ok
// const notNullType: myNotNullableType = 'Mateus'; // error

console.log(notNullType);

// PARAMETERS
// its a utility that works over a type(not value), we use it to capture
// the parameters of a function to create a new type

const greetPerson = (name: string, age: number) => {
  return `${name} is ${age} years old!`;
};

type greetParams = Parameters<typeof greetPerson>;

const greetContent: greetParams = ["Mateus", 33];

console.log(greetContent);
