const user ={
    username: "Harsh",
    loginCount : 8,
    signedIn: true,

    getuserDetail: function() {
        // console.log("Got user details from database");
        // console.log(`username : ${this.username}`);
        console.log(this);
    }

}

// console.log(user.username);
// console.log(user.getuserDetail());

// console.log(this);

// const promiseOne = new Promise()
// const date = new Date()

function User (username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function (){
        console.log(`Welcom ${this.username}`);
    }

    return this
}

const userOne = new User("harsh", 12, true)
const userTwo = new User("raj", 15,false)
console.log(userOne.constructor);
// console.log(userTwo);
// new create new empty object
// when use new the constructor function is called.