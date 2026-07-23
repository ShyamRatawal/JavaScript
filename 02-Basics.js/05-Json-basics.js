const course = {
    coursename: "CodingDaily",
    price: "999",
    courseInstructor: "XYZ"
}

course.courseInstructor
// refers to the course instructor


const {courseInstructor: instructor} = course
// now only instructor can be used instead of courseInstructor 
// this helps inproves readability and shortens the code 
// aslo this will now only refer to the courseInstructor in course
// called destructuring 

console.log(instructor);

/* ====== JSON Format ==========

    {   
        "name": "shyam"
        "age": 19
        "isLoggedIn": true
    }
        
*/
// an example of API



[
    {},
    {},
    {}
]