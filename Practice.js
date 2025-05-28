console.log(a); // undefined
var a = 5;

console.log(b); // ❌ ReferenceError
let b = 10;

console.log(c); // ❌ ReferenceError
const c = 20;

sayHello();     // ✅ "Hello from function"
function sayHello() {
  console.log("Hello from function");
}

