// ==== basice conversion =======
console.log(2 > 1) // true
console.log(2 < 1) // false

// ======= diff data type conversion ========
console.log("2" > 1) // true
console.log("02" > 1) // true

// ===== value/conversion  for null ==========
console.log(null > 0) // false
console.log(null == 0) // false
console.log(null >= 0) // true

// ====== value/conversion  for undefined =========
console.log(undefined > 0) // false
console.log(undefined == 0) // false
console.log(undefined >= 0) // false


// strict check (===) checks the value as well as the datatype
console.log("2" === 2) // false 
