const useremail = "h@gmail.com"

if(useremail){
    console.log("got email")
} else {
    console.log("don't have email")
}

// falsy values

// false,0,-0,0n,BigInt,"",null,undefined,NaN

//truthy values 

// 1,"0","false"," ",[],{},function(){}

// if (useremail.length === 0){
//     console.log("arr empty");
// }

const emptyobj ={}

// if(Object.keys(emptyobj).length === 0){
//     console.log("empty");
// }

// false == 0 (true)
// false == "" (true)
// 0 == ""(true)

// nullish Coalescing Operator (??) : null undefined (it is used for sefty of null value.)

let val1;
// val1 = 5??10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

// terniary operator.

// condition ? true : false

const iceprice = 50

iceprice <= 80 ? console.log("less than 80") : console.log("more than 80");;