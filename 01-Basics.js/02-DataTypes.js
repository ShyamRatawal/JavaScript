"use strict";
// treats all the js code as in newer version

alert(3+3) 
// works on browser, doesnt work on nodejs

console.log(3+3); console.log("hello")
// correct syntax but low code readabiliy 

let name = "shyam"
// string == "" / ''

let age = 19
// number

let isLoggedIn = false
// boolean 

let city = null
// it is a representation of empty
// a standalone value

let state;
// undefined : refers to unassignied value

// symbol : used mostly for uniqueness 

let student = {
    rollNo = 14
}
// object data type / similar to class in cpp

console.log(typeof variable);
console.log(typeof "variable");
// returns type of variables or given value

console.log(typeof null);
// gives object

console/log(typeof undefined);
// gives undefined