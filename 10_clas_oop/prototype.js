// let myName = "Harsh  "

// console.log(myName.length);


let myHeros = ["spiderman" , "thor"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.harsh = function(){
    console.log(`harsh is present in all objects`);
}

Array.prototype.hiHarsh = function(){
    console.log(` say hii harsh`);
}

// heroPower.harsh()
// myHeros.harsh()
// myHeros.hiHarsh()
// heroPower.hiHarsh()

// inheritance

const User = {
   name: "raj",
   email: "raj@1gl",

}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailabe: false
}

const TASupport = {
    makeAssigment: "javaScript",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//  modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "chaiAurCode   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True Length is ${this.trim().length}`);
}

anotherUsername.trueLength()
"harsh".trueLength()
"ICeTea".trueLength()