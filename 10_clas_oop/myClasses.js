//  ES6

// class User {
//     constructor(username, email, password){
//         this.password = password;
//         this.email = email;
//         this.username = username
//     }

//     encryptPassword(){
//         return `${this.password} abc`
//     }

//     ChangeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User ("raj", "raj1@gmail.com", "123")

// console.log(chai.encryptPassword());
// console.log(chai.ChangeUsername());

// behind the scene

function User(username, email, password){
    this.username =username;
    this.email = email;
    this.password = password
}
User.prototype.encryptPassword = function(){
      return `${this.password}abc`
}

User.prototype.ChangeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("harsh", "harsh1@gmail.com", "124")

console.log(tea.encryptPassword());
console.log(tea.ChangeUsername());