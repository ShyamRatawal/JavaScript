const firstName = "shyam"
const lastName = "ratawal"

// old way
console.log(firstName + " " + lastName);

// better way + more readability 
console.log(`${firstName} ${lastName}`);

// use backticks (``)
// also to use any variables use dollar sign ($) with curly braces ({}) 

// =========== NOTE =============
/*
    string interpolation means we make place holder in our log and can use variables directly 
    methods like toupper case or lower case can be used easily with the help of dot operator
*/


console.log(`${firstName.toUpperCase()} ${lastName.toUpperCase()}`);


// also declared by
const newName = new String ("shyam")
const fullName = new String ("Shyam-Ratawal")


console.log(newName[0]);
console.log(newName.length);


// gives the character at the given index
console.log(newName.charAt(1));


// gives the index of the given value
console.log(newName.indexOf("a"));


/* ========= Substring() ==========
    to give a start and end point of a string we use substring
    if 'a' is -ve starting value defaults to 0 
    Executes till n-1 
    if range (a, n)

*/
console.log(fullName.substring(0, 5))


/* ======== Slice() =========
    also gives a start and end point 
    here 'a' can be -ve and function strats from opposite direction i.e. from the end
    Executes till n-1
    if range is (a, n)

*/
console.log(fullName.slice(-7, 13));


/* =========== trim() =========
    used to remove spaces from start and the end in the given string

*/
const spacedName = new String ("    shyam   ")

console.log(spacedName);
console.log(spacedName.trim());


/* ========== replace() ==========
    replace(searchValue, replaceValue)

*/
const url = "https://youtube.com/MrBeast%20Gaming"
console.log(url.replace("%20", "-"))


/*  ========== includes() =========
    returns the boolean value if argument is included in the function

*/
console.log(url.includes("youtube")); // true
console.log(url.includes("Shyam")); // false


