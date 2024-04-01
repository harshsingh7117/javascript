const code = ["js","ruby","java","python","cpp"]
// callback function has no name


// code.forEach( function (val) {
//      console.log(val);
// })

// code.forEach( (item) => {
//     console.log(item);
// })

// function printme(item){
//     console.log(item);
// }

// code.forEach(printme)

// code.forEach((item,index,arr) => {
//     console.log(item,index,arr);
// })

const mycode = [
    {
        lanname: "javascript",
        lanfileName: "js"
    },
    {
        lanname: "python",
        lanfileName: "py"
    },
    {
        lanname: "cpp",
        lanfileName: "c++"
    }
]

mycode.forEach((item) => {
    console.log(item.lanfileName);
})