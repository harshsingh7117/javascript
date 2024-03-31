// Scopes

// let a =10
// const b =20
// var c = 30

// var c = 400


// if(true){
//     let a = 10 // this is called global scope.
//     const b = 20  // if inside element is called block scope.
//     var c = 30
// }

// console.log(a)
// console.log(b)
// console.log(c)

// let a = 300
// if(true){
    // let a= 10
    // const b =20
    // console.log("inner: ",a);

// }

// console.log(a)

function one(){
    const username = "Harsh"
    
    function two(){
        const website = "youtub"
        console.log(username);
    }
    // console.log(website);

    // two()
}

// one()

if(true){
    const username = "harsh"
    if(username === "harsh"){
        const website = "youtub"
        // console.log(username+website);
    }
    // console.log(website);
}
// console.log(username);

// +++++++++++++++++++++++ Interesting +++++++++++++++++++++++++

function addone(num){
    return num +1

}

console.log(addone(5))

const addtwo = function (num){    // in some case we can call expresion.
    return num + 2
}

addtwo(5)