// ======= singleton =======
// from constructor sigleton is created
// Object.create

const mySym = Symbol("keys")

// object literals
const JsUser = {
    name: "shyam",
    age: 19,
    [mySym]: "key1",
    "my city": "delhi",
    email: "shyam@abc.com",
    isLoggedIn: true
}


console.log(JsUser.name);

// console.log(JsUser[email]); // error; takes the value as string

console.log(JsUser["email"]);

// console.log(JsUser.my city); // error; spaces cant be used

console.log(JsUser["my city"]);
// only way to access these is with square brackets


console.log(JsUser[mySym])
// can only be accessed by this method with square brackets


JsUser.email = "shyam@xyz.com"
// email will be updated 


// Object.freeze(JsUser)
// freeze the object and no more changes can be made 


JsUser.email = "shyam@pqr.com"
// this will run but data will remain the same


console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user");
}
// treated like variables and can be created within the object

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



