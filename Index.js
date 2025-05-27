// Below is the sample code

console.log("Hello World");

let a = 4;
let b = 6;

let add = (a, b) => {
    let sum = a + b;
    return sum;
}

console.log(add(a,b));
console.log();

// Code for converting object type to JSON type
const objectToConvert = {
    name : 'Alice',
    age : 25
};
const json = JSON.stringify(objectToConvert);
console.log(json);
console.log(typeof(json));
console.log();

// Code for converting JSON type to object type
let jsonString = '{"name": "Alice", "age": 25, "city": "Wonderland"}';

let obj = JSON.parse(jsonString);

console.log(obj);
console.log(obj.name);
console.log(typeof(obj));
console.log();
