// Array is a object .
// in other programming language we store multipal value in a single variable.
// in js array is resizable. in js array can stored mixed type of data.
const myArr =[0,5,2,6,7]
const myHeros =["shaktiman", "naagarjun"];
const myArr2 =new Array(1,7,8,9)
// console.log(myArray[3]);

// array methods

// myArr.push(6)
// myArr.push(4)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(2));

// const newArr = myArr.join()
9
// console.log(myArr);
// console.log(typeof newArr);

//  slice,splice(splice change our original array)

// console.log("A", myArr);

const myn1= myArr.slice(1,3)

// console.log(myn1);
// console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log("C" , myArr);
console.log(myn2);