// ADVANCED TYPES

// Mapped Types
// are types created based on mapping of properties from another type, e.g an object type

type User = {
  name: string;
  age: number;
  email: string;
};

type ReadonlyUser = {
  readonly [K in keyof User]: User[K];
};
// 1 - keyof, get the keys of User: "name" | "age" | "email"
// 2 - K in keyof User -> iterate over these keys
// 3 - applies the modifier readonly
// 4 - User[k] -> get the value associated to this key inside User, e.g User["name"]

const user: ReadonlyUser = {
  name: "Mateus",
  email: "mateus@email.com",
  age: 30,
};

// user.name = "Outro"; // cannot modify, its read only

// equivalent to

// type ReadonlyUser = {
//   readonly name: string;
//   readonly age: number;
//   readonly email: string;
// };

// Conditional Types
// they are base create based on conditions, for example, this generic
// extends to this or that
type Message<T> = T extends string ? "text message" : "other message";

type Msg1 = Message<string>; // "text message"
type Msg2 = Message<boolean>; // "other message"

// Literal Types
// the naming says it all, it need to be literally a value
type Age = 42;

let MyAgeToday: Age = 42; // ok
// let MyAgeToday: Age = 43; // error

// Template Literal Types
// are a way to manipulate string values as types. They allow you to create a type based on the result of string manipulation or concatenatio
type Name = `Mr. ${string}`;

let MyRealName: Name = `Mr. Smith`; // ok
// let name: Name = `Mrs. Smith`;  // error

console.log(MyRealName);

// Recursive Type,
// are a way to define a type that references itself, use for complex data structures,
// such as trees or linked list.

type MenuItem = {
  label: string;
  link?: string;
  children?: MenuItem[];
};

const menu: MenuItem = {
  label: "Home",
  children: [
    {
      label: "Products",
      children: [
        { label: "Laptops", link: "/products/laptops" },
        { label: "Phones", link: "/products/phones" },
      ],
    },
    {
      label: "About",
      link: "/about",
    },
  ],
};
