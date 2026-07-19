const key = 123
const flag = -36
const float = 32.23

// ======== abs() ========
// converts -ve value to positive, doesnt change any p[ositive value
console.log(Math.abs(flag)) // 36

// ====== round() ========
// round offs the value 
console.log(Math.round(float)); // 32

// NOTE: ceil() / floor() also rounds of to the next number and the base number respectively 
console.log(Math.ceil(float)); // 33
console.log(Math.floor(float)); // 32


// ========== min() / max() ===========
// returns the min and max from an array 
console.log(Math.min(4, 6, 8, 10)) // 4
console.log(Math.max(4, 6, 8, 10)) // 10


/* =========== Random() ============
    returns a random value between 0 and 1
*/
console.log(Math.random());

console.log(Math.floor(Math.random() * 10) + 1); // floor() to exclude it from exceeding the range 


// == IMP FORMULA ==
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);