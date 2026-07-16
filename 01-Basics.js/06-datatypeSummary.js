// Types => primitive, non-primitive

// ======== Primitive ==========
// also called value type
// call by value, a copy of the datatype is given to change the value

/* 
    7 types : string, number, boolean, null, undefined, symbol, bigInt
*/

const name = "shyam"; // string

const score = 20; // number
const value = 20.33; // number

const loggedIn = true; // bool

const length = null; // empty/null

let weather; // undefined 
/* ---- NOTE ----
    const cannot be undefined
*/

const id = Symbol("abc123"); // unique

const bigNum = 999999995222n; // big int 


// ========= Non - Primitive =============
// also called reference type
// call by reference, change in the original reference of the memory address

/* 
    Arrays, Object, Function
*/

const evenNum = [2, 4, 6, 8, 10] // array
const tenth = ["rohan", "tushar", "ram"] // array

let Obj = {
    name: "shyam",
    age: 19
} // object

function Greet() {
    console.log("hello")
} // function

Greet() // calling the function 

// ========= Typeof of Datatypes =========
/* 
    undefined => "undefined"
    null => "object"
    boolean => "boolean"
    number => "number"
    string => "string"
    symbol => "symbol"
    function => "function OR object-function"
    
*/  
