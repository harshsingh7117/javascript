//  primirive detatype 

// there are 7 type of datatype (this is call by value.)
 
// String
// Number
// Boolean
// null
// undefined
// Symbol
// BigInt(thid is syntefic value)

const score = 100
const scoreValue = 100.8

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const  id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 789745874225454n

// reference detatype (Non primitive)

// Array
// Object
// functions

const heros =["shaktiman","naagraj", "doga" ];
let myObj = {
    name : "harsh",
    age : 22,

}

const myFunction = function(){
    console.log("hellow worls");
}

// console.log(typeof myFunction);

// typeof can be read carefully. (262ecma)


// *****************Memory*********************** 

// stack memory (used in primitive)it change copy value, heap (used in non-primitive)its change original value.

let myYoutubename = "harshsingh"
let anothername = myYoutubename
anothername ="harshkumar"

// console.log(anothername);
// console.log(myYoutubename);

let userOne = {
    email : "harshsingh7117",
    upi : "9135438363@ybl",

}

let userTwo = userOne
userTwo.email = "harsh@google.com"

console.log(userOne.email);
console.log(userTwo.email);