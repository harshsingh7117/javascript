const User ={
    _email: 'h@gmail.com',
    _password: "abc",

    get email(){
        return this._email.toLowerCase()
    },

    set email(value){
        this._email = value
    }
}

const just = Object.create(User)
console.log(just.email);