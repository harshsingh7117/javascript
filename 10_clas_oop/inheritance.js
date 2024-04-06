class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email;
        this.password = password;

    }

    addCource(){
        console.log(` a new cource was added by ${this.username}`);
    }
}

const chai = new Teacher("harsh", "har1@gmail.com", "125")

chai.addCource()

const anotherChai = new User("anotherchai")

anotherChai.logMe()

console.log(chai === anotherChai);
console.log(chai instanceof Teacher);
console.log(chai instanceof User);