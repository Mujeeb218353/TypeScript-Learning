//* VID: 2
let str: string = "hello";
let num: number = 1;
let bool: boolean = true;
let fullName: any = "Mujeeb Ur Rehman";
let b: unknown;
b = 1;
b = "Unknown";

// @ts-ignore
console.log(str, num, bool, fullName, b);
// @ts-ignore

// * VID: 3
// Write a function to add two numbers
// Catch errors & solve them
// Ts Config File
function sum(a: number, b: number): number {
  return a + b;
}
console.log(sum(1, 14));

//* VID: 4
// ? Type Annotation
//* Specifying type of a variable, function or class
let a: string = "TypeScript Type Annotation";
console.log(a);

// * VID: 5
// Big Int
let intMaxValue = (Number as any).MAX_SAFE_INTEGER;
console.log("Max Int: ", intMaxValue);
let bigInt: bigint = 900719925474099189534543324324n;
console.log("BigInt 1: ", bigInt);

// Big Int constructor
let bigInt2: bigint = BigInt("9007199254740991898987987");
console.log("BigInt 2: ", bigInt2);

let sumBigInt: bigint = bigInt + bigInt2;
let mulBigInt: bigint = bigInt * bigInt2;
let divBigInt: bigint = bigInt / bigInt2;
console.log("Sum BigInt:", sumBigInt);
console.log("Mul BigInt:", mulBigInt);
console.log("Div BigInt:", divBigInt);

// * VID: 6
// Unknown and any

// Using `any`
let anyValue: any;

anyValue = 42; // Fine
anyValue = "hello"; // Fine
anyValue = {}; // Fine

// You can do anything with `any`, but it's not safe
// console.log(anyValue.toUpperCase()); //! Fine in TypeScript, but might cause a runtime error if not a string

// Using `unknown`
let unknownValue: unknown;

unknownValue = 42; // Fine
unknownValue = "hello"; // Fine
unknownValue = {}; // Fine

// You cannot directly use `unknown` without checking its type first
// console.log(unknownValue.toUpperCase()); // Error: You can't do this without checking the type

// Type check before using `unknown`
if (typeof unknownValue === "string") {
  console.log(unknownValue.toUpperCase()); // Safe, because TypeScript knows it's a string
}

if (typeof unknownValue === "number") {
  console.log(unknownValue.toFixed(2)); // Safe, because TypeScript knows it's a number
}

// * VID: 7
//  Type inference is when the compiler can infer the type of a variable or function based on its usage.
//  Type Annotation is when we explicitly declare the type of a variable or function.

// * VID: 8
// Functions
//  Fat arrow function
const greet = (name: string): string => {
  return `Hello, ${name}`;
};
console.log(greet("Mujeeb Ur Rehman"));

let numbers: number[] = [1, 2, 3, 4, 5];


const average = (arr: number[]): number => {
  let averageNum: number;
  averageNum = arr.reduce((prevNum: number, currentNum: number) => currentNum += prevNum, 0);
  return averageNum / arr.length;
};

console.log(average(numbers));
let arr: Array<number> = [34, 90, 5, 43, 78] 

const maxNum = (arr: number[]): number => {
  let maxNum: number = arr[0]
  for(let i = 1; i < arr.length; i++){
    if( arr[i] > maxNum ){
      maxNum = arr[i]
    }
  }
  return maxNum
}

console.log(maxNum(arr));

// * VID: 9
// Default and Optional Parameters
const greet2 = (name: string, id?: number, greeting: string = "Hello"): string => {
  if (id) {
    return `${greeting}, ${name}! Your ID is ${id}.`;
  }
  return `${greeting}, ${name}!`;
}

console.log(greet2("Mujeeb Ur Rehman", 1));

// * VID: 10
// Array

// Array Using square brackets
let arr1: number[] = [1, 2, 3, 4, 5];

// Array Using Array constructor
let arr2: Array<number> = [1, 2, 3, 4, 5];
let arr3: number[] = new Array(1, 2, 3, 4, 5);

// Array Using Array.from
let arr4: string[] = Array.from(["M", "u", "j", "e", "e", "b"]);
console.log(arr4[0]);

// Array Using Array.of
let arr5: number[] = Array.of(1, 2, 3, 4, 5);

console.log(arr1[4]);

// * VID: 11
// Array Iteration and Methods

const fruits: string[] = ["apple", "banana", "orange"];
const newFruits = fruits.push("grape");
console.log(fruits);
console.log(newFruits); // it returns the new length of the array not the array itself

for(let i = 0; i < fruits.length; i++){
  console.log(fruits[i]);
}

fruits.forEach((fruit) => console.log("Foreach: ",fruit));

fruits.map((fruit) => console.log("map: ",fruit));

fruits.filter((fruit) => console.log("filter: ",fruit));

for (const fruit of fruits) {
  console.log('for of: ',fruit);
}

// * VID: 12
// Filter and Map Methods

// Map Method will not modify the original array but will return a new array

const doubleNumbers: number[] = numbers.map((num: number): number => num * 2);
console.log(doubleNumbers);

// Filter Method will not modify the original array but will return a new array

const evenNumbers: number[] = numbers.filter((num: number): boolean => num % 2 === 0);
console.log(evenNumbers);

// * VID: 13
// Objects

const user:{
  name: string;
  age: number;
  isStudent: boolean;
  address: {
    city: string;
    country: string;
  };
} = {
  name: "Mujeeb Ur Rehman",
  age: 23,
  isStudent: true,
  address: {
    city: "Karachi",
    country: "Pakistan",
  },
};

console.log(user);

// * VID: 14
// Type Aliases

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  class?: string;
  address: {
    city: string;
    country: string;
  };
};

const user2: Person = {
  name: "Mujeeb Ur Rehman",
  age: 23,
  isStudent: true,
  address: {
    city: "Shp",
    country: "Pakistan",
  },
};

console.log(user2);

type Product = {
  name: string;
  price: number;
  quantity: number;
};

const product : Product = {
  name: "Laptop",
  price: 1000,
  quantity: 10,
};

const calculateTotalPrice = (product: Product): number => {
  return product.price * product.quantity;
};

console.log("Total Price:",calculateTotalPrice(product));

// * VID: 15
// Function Call Signatures
// Call Signature is defining the parameters and return type of a function in an object or interface or class or type alias.
type Student = {
  name: string;
  age: number;
  greeting: (country: string) => string;
};

const student1: Student = {
  name: "Mujeeb Ur Rehman",
  age: 23,
  greeting: (country): string => `Hello, I am ${student1.name} and I am ${student1.age} years old and I live in ${country}.`,
};  

console.log(student1.greeting("Pakistan"));

// Pure Function Call Signatures

type MyObject = {
  (input: string): string; // Call signature
  propertyName: string;    // Property
};

const myObject: MyObject = (input: string) => {
  return `Hello, ${input}!`;
};

myObject.propertyName = "Greeting Function";

console.log(myObject("World")); 
console.log(myObject.propertyName); 

// * VID: 16
// Enums

enum Roles {
  user = "user",
  admin = "admin"
}

type LoginDetails = {
  email: string;
  password: string;
  role: Roles;
}

const loginDetails1: LoginDetails = {
  email: "UQO8P@example.com",
  password: "123456",
  role: Roles.admin,
}

const loginDetails2: LoginDetails = {
  email: "UQO8P@example.com",
  password: "123456",
  role: Roles.user,
}

const userLogin = (loginDetails: LoginDetails): string => {
  return `Hello, ${loginDetails.email} and your role is ${loginDetails.role}`
}

console.log(userLogin(loginDetails1));
console.log(userLogin(loginDetails2));

// * VID: 17
// Tuples

type PersonInfo = readonly [string, number, boolean]

const person2Info: PersonInfo = ["Mujeeb Ur Rehman", 23, true];

console.log(person2Info);

// * VID: 18
// Union and Intersection 

const unionFunction = (a: number | string, b: number | string): number | string => {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return a.toString() + b.toString();
  }
}

console.log("Union:",unionFunction(1, 2));

type PersonDetails = {
  name: string;
  age: number;
}

type Employee = {
  employeeId: number;
  department: string;
}

type EmployeeDetails = PersonDetails & Employee;

const employeeDetails: EmployeeDetails = {
  name: "Mujeeb Ur Rehman",
  age: 23,
  employeeId: 123,
  department: "IT",
}

console.log("Intersection:",employeeDetails);

type User = {
  name: string;
  age: number;
}

type LocationInfo = {
  city: string;
  country: string;
}

const userInfo = {
  name: "Mujeeb",
  age: 23
}

const locationInfo = {
  city: "karachi",
  country: "Pakistan"
}

const createAccount = (user: User, location: LocationInfo) => {
  return {...user, ...location}
}

const userAccount: User & LocationInfo = createAccount(userInfo, locationInfo)

console.log(userAccount);

// * VID: 19
// Generics

function identity<T>(value: T): T {
  return value;
}

console.log(identity<number>(42));  
console.log(identity<string>("Hello")); 

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

const result = swap<string, number>(["Hello", 42]);
console.log(result); 

interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

const numberPair: KeyValuePair<number, string> = { key: 1, value: "One" };
const stringPair: KeyValuePair<string, boolean> = { key: "isValid", value: true };

console.log(numberPair);
console.log(stringPair); 

// * VID : 20
// Function Overloading with Generics

const userDetails = <T,U>(a:T, b:U): string => {
  if(typeof a === "string" && typeof b === "number") {
    return `Name: ${a}, Age: ${b}`;
  } else if(typeof a === "number" && typeof b === "string") {
    return `Name: ${b}, Age: ${a}`
  }else{
    return `Name: ${a}, Role: ${b ? "Admin" : "User"}`
  }
}

console.log("Number and String:",userDetails(23, "Mujeeb"));
console.log("String and Number:",userDetails<string, number>("Mujeeb", 23));
console.log("String and Boolean:",userDetails<string, boolean>("Mujeeb", true));
console.log("Boolean and String:",userDetails<boolean, string>(false, "Mujeeb"));

// * VID: 21
// Interface

interface Persons {
  name: string;
  age: number;
}

const person1: Persons = {
  name: "Mujeeb Ur Rehman",
  age: 23
}

console.log(person1);
console.log(person1.name);

// * VID: 23 OOP
// Pillar of OOP are Inheritance, Encapsulation, Abstraction and Polymorphism
// Classes and Constructors

class PersonClass {
  name: string;
  age: number;
  hobbies: string[]; 

  constructor(name: string, age:number, hobbies: string[]){
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }

  introduce(): string  {
    return `Hello, My name is ${this.name} and I am ${this.age} years old and I love ${this.hobbies.join(", ")}`;
  }

}
 
const personsClass1: PersonClass = new PersonClass("Muhammad", 23, ["Reading", "Preaching"]);
console.log(personsClass1.hobbies[0]);
console.log(personsClass1.introduce());

// * VID: 24
// Inheritance and super key word

class StudentClass extends PersonClass {

  grade: string;

  constructor(name: string, age:number, hobbies: string[], grade: string){
    super(name, age, hobbies);
    this.grade = grade;
  }

  Introduce = (): string => {
    // return `Hello, My name is ${this.name} and I am ${this.age} years old and I have grade ${this.grade} and I love ${this.hobbies.join(", ")}.`;
    return `${super.introduce()} and I have grade ${this.grade}.`;
  }

}

const stud1: StudentClass = new StudentClass("Mujeeb", 23, ["Coding", "Reading"], "A");

console.log(stud1.Introduce());

// * VID: 25
// Access Modifiers

// Public: Accessible from anywhere (inside, outside, and subclasses).
// Private: Accessible only within the class itself.
// Protected: Accessible within the class and its subclasses, but not outside.

/*

 --------------------------------------------
| Modifiers |  Parent  |  Child   | Outside  |
|-----------|----------|----------|----------|
| public    |   Yes    |    Yes   |   Yes    |
| protected |   Yes    |    Yes   |   No     |
| private   |   Yes    |    No    |   No     |
|___________|__________|__________|__________|

*/

// Class defined outside the Parent-Child relationship
class Outside {
  public name: string;

  constructor(name: string) {
    this.name = "Public: "+name;
  }
}

// Parent class demonstrating different access modifiers
class Parent {
  public name1: string; 
  private name2: string; 
  protected name3: string; 

  constructor(name1: string, name2: string, name3: string) {
    this.name1 = name1;
    this.name2 = name2;
    this.name3 = name3;
  }

  showPrivateName(): void {
    console.log("Parent Class");
    console.log("Public: ",this.name1);
    console.log("Private: ",this.name2);
    console.log("Protected: ",this.name3);
  }
}


class Child extends Parent {
  constructor(name1: string, name2: string, name3: string) {
    super(name1, name2, name3);
  }

  
  showProtectedAndPublicName(): void {
    console.log("Child Class");
    console.log("Public: ",this.name1); 
    // console.log("Private: ",this.name2); not accessible for child
    console.log("Protected: ",this.name3); 
  }
}

const outside = new Outside("Name");
console.log(outside.name);

const parent111 = new Parent("Name 1", "Name 2", "Name 3");
parent111.showPrivateName()

const child= new Child("Name 1", "Name 2", "Name 3");
child.showProtectedAndPublicName()

// * VID: 26
// Short Hand Properties

class EmployeeClass {
  constructor(
    public name: string,
    public age: number,
    private salary: number
  ){}
}

const emp1 = new EmployeeClass("Mujeeb", 23, 50000);
console.log(emp1.name, emp1.age);

// * VID: 27
// Getters and Setters

class UserData {
  public name: string;
  protected _age!: number; // Using the definite assignment assertion (!)

  constructor(name: string) {
    this.name = name;
  }

  public set age(age: number) {
    if (age < 0 || age > 150) {
      throw new Error("Age is not valid");
    }
    this._age = age;
  }

  public get age(): number {
    if (this._age === undefined) {
      throw new Error("Age is not defined");
    }
    return this._age;
  }
}

const userData = new UserData("Mujeeb-Ur-Rehman");
userData.age = 23;
console.log(userData.age);

// * VID: 28
// Practice of Classes

// Bank Account

class BankAccount {

  private _balance: number = 0;

  public set balance(balance: number){
    if(this._balance < 0){
      throw new Error("Invalid balance")
    }
    this._balance = balance;
  }

  public get balance(): number{
    return this._balance;
  }

}

const bankAccount = new BankAccount();
bankAccount.balance = 100000;
console.log(bankAccount.balance);

class Temperature {

  private _celsius: number = 0;

  public set celsius(celsius: number){
    this._celsius = celsius;
  }

  public get celsius(): number{
    return this._celsius;
  }

  public set fahrenheit(fahrenheit: number){
    this._celsius = (fahrenheit - 32) * 5 / 9;
  }

  public get fahrenheit():number{
    return ( this._celsius * 9 ) / 5 + 32;
  }
}

const temperature = new Temperature();
temperature.celsius = 37;
console.log(temperature.fahrenheit+" F");
temperature.fahrenheit = 98.6;
console.log(temperature.celsius+" C");

// * VID: 29
// Static Properties and Methods

class Area {

  public static pi: number = Math.PI;

  public static areaOfCircle(radius: number): number {
    return this.pi * radius * radius;
  }

  public static areaOfSquare(side: number): number {
    return side * side;
  }

  public static areaOfRectangle(length: number, breadth: number): number {
    return length * breadth;
  }

  public static areaOfTriangle(base: number, height: number): number {
    return 0.5 * base * height;
  }

}

console.log("Area of Circle: "+Area.areaOfCircle(5));
console.log("Area of Square: "+Area.areaOfSquare(5));
console.log("Area of Rectangle: "+Area.areaOfRectangle(5, 5));
console.log("Area of Triangle: "+Area.areaOfTriangle(5, 5));

// * VID: 30
// Abstract Classes

abstract class Shape {
  public abstract calArea(): number;
  public abstract printArea(): void;
}

class Circle extends Shape {

  private _radius: number;

  constructor(radius: number) {
    super();
    this._radius = radius;
  }

  public calArea(): number {
    return Math.PI * this._radius * this._radius;
  }

  public printArea(): void {
    console.log("Area of Circle: "+this.calArea());
  }

}

const circle = new Circle(5);
circle.printArea();

// * VID: 31
// Interface in class

interface Shape1 {
  draw(): void;
}

interface Colorable extends Shape1 {
  color(): void;
}

class Circle1 implements Colorable {
  draw() {
    console.log("Drawing a circle.");
  }

  color() {
    console.log("Coloring the circle.");
  }
}

const circle1 = new Circle1();
circle1.draw();
circle1.color();

interface Shape2 {
  length: number;
  width: number;
  height: number
}

interface Shape2 {
  color: string;
}

// we can't make type alias name same but interface name

const cube: Shape2 = {
  length: 2,
  width: 3,
  height: 4,
  color: 'sky blue'
}

console.log("Area of Cube: "+cube.height*cube.length*cube.width+", Color:"+cube.color);

// * VID: 32
// Type Safety with Typeof Guards: Understanding Type Narrowing in TypeScript

function processValue(value: number | string | string[]) {
  if (typeof value === 'number') {
    console.log(value.toFixed(2)); 
  } else if (typeof value === 'string') {
    console.log(value.toUpperCase()); 
  } else {
    const upperCaseStrings = value.map(str => str.toUpperCase());
    console.log(upperCaseStrings.join(', '));
  }
}

processValue(123.456);
processValue("hello");
processValue(["hello", "world"]);