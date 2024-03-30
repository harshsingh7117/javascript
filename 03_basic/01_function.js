
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
// console.log(loginusermessage())

function calculatecartPrice(val1,val2,...num1){
    return num1
}

// console.log(calculatecartPrice(200,400,500,800,544))

const user={
    username: "harsh",
    price: 99999
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleobject(user)
handleobject({
    username: "raj",
    price: 777
})

const myArr = [200,500,700,666]

function returnsecondValue(getarray){
    return getarray[2]
}

console.log(returnsecondValue(myArr))
console.log(returnsecondValue([200,300,222,511]))