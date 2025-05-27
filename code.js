let a = 10;        // block scoped, reassignable
const b = 20;      // block scoped, NOT reassignable
var c = 30;        // function scoped (avoid karo bhai)

typeof "Hello"     // 'string'
typeof 42          // 'number'
typeof null        // 'object' ← JS ka bug 😅
typeof undefined   // 'undefined'
typeof NaN         // 'number' ← haan bhai sach!



console.log(x);  // undefined (var hoisting)
var x = 5;

console.log(y);  // ReferenceError (let/const are TDZ - temporal dead zone)
let y = 10;



Function :

function normalFunc() {}           // hoisted
const arrowFunc = () => {};        // not hoisted
const funcExp = function() {};     // not hoisted




// Falsy values:
false, 0, "", null, undefined, NaN

// Truthy: Everything else


function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  }
}

const counter = outer();
counter(); // 1
counter(); // 2

const obj = {
  name: "Adarsh",
  sayHi() {
    console.log(this.name);  // "Adarsh"
  }
}

const arrow = () => console.log(this); // arrow doesn't bind `this`, inherits from parent



const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data mil gaya bhai"), 1000);
  });
};

async function getData() {
  const res = await fetchData();
  console.log(res);  // "Data mil gaya bhai"
}


const s = new Set([1, 2, 2]); // {1, 2}
const m = new Map();
m.set("key", "value");
const obj = { a: 1, b: { c: 2 } };

// Shallow
const copy1 = { ...obj };

// Deep (not perfect)
const copy2 = JSON.parse(JSON.stringify(obj));
// file.js
export const name = "Adarsh";
export default function greet() {}

// index.js
import greet, { name } from './file.js';
const person = { address: { city: "Delhi" } };
console.log(person?.address?.city); // "Delhi"

const val = null ?? "Default"; // "Default"
const person = { address: { city: "Delhi" } };
console.log(person?.address?.city); // "Delhi"

const val = null ?? "Default"; // "Default"
console.log('Start');

setTimeout(() => console.log('Timeout'), 0); // macro-task
Promise.resolve().then(() => console.log('Promise')); // micro-task

console.log('End');

// Output: Start → End → Promise → Timeout

