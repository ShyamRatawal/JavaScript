const str1 = "hello"
const arr = [1, 2, 3, 4, 5, "shyam", str1]
// multiple data types can be used inside the same array


console.log(typeof(arr));
console.log(typeof arr);
// returns the type of data 


console.log(arr.length); 
// .length to get the length 


arr.push(6)
// adds the passed element to the end of the array 
console.log(arr);


arr.pop()
console.log(arr);
// removes the last element from the array
console.log(arr.pop()); // hello (interesting)
console.log(arr);


arr.unshift(2)
// adds the passed value to the start of the array 
console.log(arr);


arr.shift()
// removes the starting element from an array
console.log(arr);


console.log(arr.includes(9));
// .includes(a)
// gives boolean value to determine if a certain element is present in the array or not


console.log(arr.indexOf(2))
// returns the index of the passed element, returns -1 if element not present



console.log("A:", arr);

const arr1 = arr.slice(1, 4)
// returns a copy of section from the array in the given range
// original array is untouched 

console.log(arr1);
console.log("B:", arr);

const arr2 = arr.splice(1, 4)
// removes element from the array in the given range
// original array is modified 

console.log(arr2);
console.log("C:", arr);

