const promiseOne = new Promise(function(resolve, reject){
    //do an async task
    //db call,crptography,network

    setTimeout(function(){
        console.log('Async task is Complete');
        resolve()
    }, 1000)
}) 

promiseOne.then(function(){
    console.log("Promise Consumed");
})

new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}). then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "chai",email: "harsh@gmail.com"})

    }, 1000)
})

promiseThree.then(function(username){
    console.log(username);

})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){

        let error = true

        if(!error){
            resolve({username: "harsh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
}) 

 promiseFour.then((user) =>{
    console.log(user);
    return user.username

}).then((username) =>{
    console.log(username);
}).catch((error)=>{
    console.log((error));

}).finally(() => {
    console.log("The Promise is Either Resolved or Rejected")
})


const promiseFive = new Promise((resolve, reject) =>{
    setTimeout(() => {
        let error = true

        if (!error) {
            resolve({username: "javascript", password: "abc"})
        } else{
            reject("ERROR: Javascript Went Wrong")
        }
    }, 1000);

})

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);

    } catch (error){
        console.log(error);

    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://api.github.com/users/harshsingh7117')
//         const data = await response.json()
//         console.log(data);
        
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()

fetch('https://api.github.com/users/harshsingh7117')
.then((response) =>{
    return response.json()
}).then((data) => {
    console.log(data);

}).catch((error) => {
    console.log(error);

})