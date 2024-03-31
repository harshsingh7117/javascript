const user ={
    username: "harsh",
    price: 999,

    welcomemessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this)
    }

}

// user.welcomemessage()
// user.username = "raj"
// user.welcomemessage()

// console.log(this);

// function one(){
//     let username = "harsh"
//     console.log(this.username);
// }

// one()

// const chai = function (){
//     let username = "harsh"
//     console.log(this.username)
// }

const chai = () => {
    let username = "harsh"
    console.log(this)
}

// chai()

// () => {

// }    this is called arrow function.

// const addtwo = (num1,num2) => {
//     return num1 + num2
// }  basic arrow function  (in curlybraces return key is must use)

// const addtwo = (num1,num2) => num1 + num2 // this is implisit arrow function ( in this function return keyword is not use.)


// const addtwo = (num1,num2) => (num1 + num2) 

const addtwo = (num1,num2) => ({username: "harsh" })

console.log(addtwo(3,4))

// const myarr = [1,2,5,4]

// myarr.forEach(function (){})
// myarr.forEach(() => {} )