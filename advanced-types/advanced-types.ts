// ADVANCED TYPES

// Literal Types, the naming says it all, it need to be literally a value
type Age = 42;

let MyAgeToday: Age = 42; // ok
// let MyAgeToday: Age = 43; // error

// Template Literal Types, are a way to manipulate string values as types. They allow you to create a type based on the result of string manipulation or concatenatio
type Name = `Mr. ${string}`;

let MyRealName: Name = `Mr. Smith`; // ok
// let name: Name = `Mrs. Smith`;  // error
