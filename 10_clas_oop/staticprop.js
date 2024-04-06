class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const harsh = new User("harsh")
// console.log(harsh.createId());

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone  = new Teacher("iphone", "i@phone.com", "123")

console.log(iphone.logMe());
console.log(iphone.createId());