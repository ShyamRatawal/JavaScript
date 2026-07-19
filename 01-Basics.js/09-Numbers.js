const pin = 2244
console.log(pin);
// JS defaults the value as number

const score = Number(3366)
console.log(score);
// explicitily declared a number


// ====== toString() =========
// converts the number to a string, and string prototypes can be used eg. length
console.log(pin.toString()); 

console.log(pin.toString().length); // 4


// ========== toFixed() ===========
// adds decimal places to the number when decimal precision is passed in the function, returns a string value
console.log(score.toFixed(2)); // 3366.00


const floatNum = 844.7342
// ========== toPrecision() ==========
// returns precise value to the precision of the number passed in the function and approximates the rest
// returns a string
console.log(floatNum.toPrecision(5)); // 844.73
console.log(floatNum.toPrecision(3)); // 845


const oneBil = 1000000000
// ========== toLocaleString() =========
// adds commas also returns a string
console.log(oneBil.toLocaleString()); // defaults to us standards
console.log(oneBil.toLocaleString("en-IN")); // for indian standards 

