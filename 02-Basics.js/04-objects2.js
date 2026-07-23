const cppUser = new Object()
const jsUser = {}
// both of these create an empty object 


cppUser.ID = "myCpp123"
cppUser.Name = "shyam"
cppUser.isLoggedIn = true

jsUser.ID = "myJs123"



const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "shyam",
            lastname: "ratawal"
        }
    }
}


console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const obj3 = { obj1, obj2 } // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj5 = {...obj1, ...obj2}
// spread operator (...) 
console.log(obj5);


const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    },
    {
        id: 3,
        email: "c@gmail.com"
    },
]

console.log(users[0].email);


console.log(Object.keys(cppUser));
// returns the key in array 
console.log(Object.values(cppUser));
// returns the value assigned to the keys in an array
console.log(Object.entries(cppUser));
// returns the array in which the keys and values are present 


console.log(cppUser.hasOwnProperty('isLoggedIn'));
// returns the boolean value if the argument is present or not 


