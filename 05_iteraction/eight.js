const myarr = [1,2,3,4,5]

// const mytotal =myarr.reduce((acc,cur) => acc + cur , 0 )


// const mytotal = myarr.reduce (function (acc, cur) {
//     console.log(`acc: ${acc} and currval : ${cur}`);
//     return acc + cur
// }, 0)


// console.log(mytotal);

const shopcart = [
    {
    itemname: "js",
    price: 299
    },
    {
    itemname: "mobile",
    price: 29999
    },
    {
    itemname: "iot cource",
    price: 4999
    },
]

const pricetopay = shopcart.reduce( (acc , item) => acc +item.price,299)

console.log(pricetopay);






//+++++++++++ finaly javascript is complited ++++++++++++++++++++++++