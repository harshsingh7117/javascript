
function saymyName(){
    console.log("H")
    console.log("A")
    console.log("R")
    console.log("S")
    console.log("H")
    
}

// saymyName() 

// function addtwoNum(num1,num2){    //(num1,num2) is parameter
//      console.log(num1 + num2)  
// }

function addtwoNum(num1,num2){
    // let result =num1 + num2
    // return result
    return num1 + num2
}

// if we write anything after return then those things will be working.
// addtwoNum(3,4) //arguments
// addtwoNum(3,"4")
// addtwoNum(3,"a")
// addtwoNum(3, null)

const result = addtwoNum(3,4)
// console.log("result:" , result)

function loginusermessage(username = "raj"){
     if(username=== undefined){
         console.log("plese enter username")
         return
     }
    return `${username} just logged in`
}

// console.log(loginusermessage("Harsh"))
// console.log(loginusermessage(""))
console.log(loginusermessage())
