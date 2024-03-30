// object declear with constructor (singleton)

// const tinderuser = new Object() // singleton object
const tinderuser ={} // non-singleton

tinderuser.id = "9135harsh"
tinderuser.name = "harsh"
tinderuser.isLoggedIn = false

// console.log(tinderuser)

const regularUser ={
    email: "harsh@gmail.com",
    fullname: {
        userFullname:{
            firstname: "harsh",
            lastname: "kumar"
        }
    }
}

// console.log(regularUser.fullname)
// console.log(regularUser.fullname.userFullname)

const obj1 ={1:"a",2: "b"}
const obj2 ={3:"a",4: "b"}
const obj4 ={5:"a",6: "b"}
const obj5 ={7:"a",8: "b"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4,obj5)

const obj3={...obj1,...obj2,...obj4,...obj5}
// console.log(obj3)

const user=
    [{id: 1,
    email: "h@gmail.com"},
    {id: 1,
    email: "ha@gmail.com"}

]

user[1].email
// console.log(tinderuser);

// console.log(Object.keys(tinderuser))
// console.log(Object.values(tinderuser))
// console.log(Object.entries(tinderuser))

// console.log(tinderuser.hasOwnProperty('isLoggedIn'))
// console.log(tinderuser.hasOwnProperty('isLoggedin'))

const cource ={
    courcename: "js",
    price: "111",
    courceinstructor: "harsh"
}

// cource.courceinstructor

const {courceinstructor}= cource
const {courceinstructor:instructor}= cource

// console.log(courceinstructor)
console.log(instructor)

// const navbar = ({company}) => {

// }   this is used in react.js

// navbar(company ="harsh")

// {
//     "name": "harsh",
//     "courcename": "js",  //this is for api call only.
//     "price": "free"
// }

[
    {},
    {},
    {}
] // object inislise in array