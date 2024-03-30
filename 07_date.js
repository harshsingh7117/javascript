// date is a type of object. 
// temporal api is used for date Object

let myDate= new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2024,0,23)
// let myCreatedDate = new Date(2024,0,23,5,3)
// let myCreatedDate = new Date("2024-01-23")
let myCreatedDate = new Date("01-02-2024")
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());


let myTime = Date.now()
 
// console.log(myTime);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()}` and the time

newDate.toLocaleString('default',{
    weekday: "long",
    
})