//  objects is made by two ways (literals and constructor )

// singleton
// we made with constructer is known as singleton

// object literals
// Object.create(constructor method)


const mysym= Symbol("key1")

const jsUser ={
    name: "Harsh",
    "full name": "Harsh Kumar",
    [mysym]: "mykey1",
    age: "21",
    Email: "harshsingh7117@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","friday"]
}

// console.log(jsUser.Email)
// console.log(jsUser["Email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mysym])

jsUser.Email = "harshsingh@chatgpt"
// Object.freeze(jsUser)
jsUser.Email = "harsh@mic"
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("hello everyone")
}

jsUser.greetingtwo = function(){
    console.log(` hello js user, ${this,this.name}`);
}

console.log(jsUser.greeting())
console.log(jsUser.greetingtwo())

// always acces onject with (jsUser.name)