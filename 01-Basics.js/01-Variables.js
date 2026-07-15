let name = "shyam" 
// can be changed or updated into a new value

const dob = "04-07-2007"
// remains the same and cannot be changed throughout the program

var age = 19
// not used as it is confusing and prone to error 

/* =========== NOTE =============
prefer not to use var
problems in block scope and functioinal scope
*/

// =============== review ==============
surname = "ratawal"
// In non-strict mode: It creates a global variable
// In strict mode: It throws an error > here, surname not defined

console.table([name, surname, age, dob])
// used to print data/values in tabular form with index

// console.log(name);
// used to print data/values


let city;
// unassigned variable automatically registers the value undefined 


name = "rohan"
// changes the value 
age = 20
// changes the value

// dob = "05-11-2006"
// ERROR : const value cannot be changed

surname = "kumar"
// changes the value

console.table([name, surname, age, dob, city])
