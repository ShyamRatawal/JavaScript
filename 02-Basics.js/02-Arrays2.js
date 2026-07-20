const marvel = ["ironman", "thor", "hulk", "captain"]
const ogMarvel = ["ironman", "thor", "hulk", "captain"]
const newMarvel = ["spiderman", "falcon", "wanda", "drStrange"]
const dc = ["batman", "superman", "robin", "raven"]


marvel.push(newMarvel)
// push directly adds the given value into the array irrespective of their data type 
// here, an array is pushed/added into an array as an element
console.log(marvel)


console.log(marvel[4][2]);
// to access the array inside the initial array 


const heros = marvel.concat(dc)
// Combines two or more arrays. This method returns a new array without modifying any existing arrays.
console.log(heros);


const allMarvel = [...ogMarvel, ...newMarvel]
console.log(allMarvel);
/*  ========= Spread Operator ===========
    spreads every element in the array as indivisual elements
    // syntax : (...) same as rest operator
*/


const numArr = [1, 2, 3, [4, 5], 6, [7, [8, 9]]]
const ans_numArr = numArr.flat(2)
// ===== flat(depth) =====
// Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(ans_numArr);


console.log(Array.isArray(numArr));
// returns boolean value if the passed argument is an array or not 

console.log(Array.from("12345"))
console.log(Array.from("shyam"))
// ===== Array.from() ========
// creates an array from the passed argument 


console.log(Array.from({name: "shyam"}));
// returns an empty array when an object is passed as the argument


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
// ====== Array.of() ========
// makes an array of the arguments passed init