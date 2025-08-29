export {};
// CLASSES
// classes are blueprints for creating objects (instances of a class)

class Animal {
  name: string;
  region: string;

  constructor(name: string, region: string) {
    this.name = name;
    this.region = region;
  }

  makeSound(): string {
    return `${this.name} is making a sound`;
  }
}

const dog = new Animal("dog", "Brazil");

console.log(dog);
console.log(dog.makeSound());

// constructor params
// In typescript, constructor params ca be declared with access modifiers (e. public, private, protected)
class Example {
  constructor(private name: string, public age: number) {}
}

//Access Modifiers
// public - the class properties and methods can be accessed anywhere (default modifier)
// private - the properties and methods can only be accessed within the same class
// protected - the properties and methods can be accessed within the class and its subclasses

// | Modifier    | Accessible Within Class | Accessible in Subclasses | Accessible Outside |
// | ----------- | ----------------------- | ------------------------ | ------------------ |
// | `public`    | ✅                      | ✅                       | ✅                 |
// | `protected` | ✅                      | ✅                       | ❌                 |
// | `private`   | ✅                      | ❌                       | ❌                 |

// Inheritance
class Dog extends Animal {
  breed: string;

  constructor(name: string, region: string, breed: string) {
    super(name, region); // super executes the father constructor
    this.breed = breed;
  }

  getBreed() {
    return `The dog bree is ${this.breed}`;
  }
}

const myDog = new Dog("dog", "spitz", "German");
console.log(myDog);

// Getters & Setters
// They are function that work like **properties**, this allow encapsultaing the state, have validations and transform the data
// Calculated values without exposing the real attributes
class Person {
  private _age: number = 0;
  private _name: string;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  get age() {
    return this._age;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}

const me = new Person("Mateus", 33);

console.log(me.age);
console.log(me.name);
me.name = "João";
console.log(me.name);

// Static attributes and methods
// These are properties and methods that belong to the class itself, not to its instances.
// I can instantiate the class, but I will not be able to access static members through the instance.
// Instances do not inherit static members.
class Mathematics {
  static PI: number = 3.1416;

  static circleArea(radius: number): number {
    return this.PI * radius * radius;
  }
}

const m1 = new Mathematics();

// console.log(m1);
// console.log(m1.circleArea(4));
console.log(Mathematics.circleArea(4));

// Abstract Class
// An abstract class in TypeScript (and other object-oriented languages) is a special
// kind of class that cannot be instantiated directly. It serves as a blueprint for other classes,
// enforcing a structure while allowing flexibility through method implementations in subclasses.
abstract class Database {
  constructor(public connectionString: string) {}

  connect(): void {
    console.log(`Connecting to ${this.connectionString}`);
  }

  // Abstract method that must be implemented by subclasses
  abstract query(sql: string): any;
}

// Implementation for PostgreSQL
class PostgresDatabase extends Database {
  query(sql: string): any {
    console.log(`Running SQL on Postgres: ${sql}`);
    return []; // Simulating data
  }
}

// Implementation for MongoDB
class MongoDatabase extends Database {
  query(queryObject: string): any {
    console.log(`Running Query on MongoDB: ${queryObject}`);
    return []; // Simulating data
  }
}

// Usage:
const pg = new PostgresDatabase("postgres://localhost:5432");
pg.connect(); // Output: Connecting to postgres://localhost:5432
pg.query("SELECT * FROM users"); // Output: Running SQL on Postgres: SELECT * FROM users

const mongo = new MongoDatabase("mongodb://localhost:27017");
mongo.connect(); // Output: Connecting to mongodb://localhost:27017
mongo.query("{ find: 'users' }"); // Output: Running Query on MongoDB: { find: 'users' }
