const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descriptor);
// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const mynewObject = Object.create(null)

const just ={
    name: 'chai',
    price: 250,
    isAvailabele: true,

    orderJust: function(){
        console.log("code not rapcherd");
    }
}

console.log(Object.getOwnPropertyDescriptor(just, "name"));

Object.defineProperty(just, "name", {
    // writable: false,
    enumerable: true
})

console.log(Object.getOwnPropertyDescriptor(just, "name"));

for (const [key , value] of Object.entries(just)) {
    if(typeof value !== 'function'){

        console.log(`${key} : ${value}`);
    }
}