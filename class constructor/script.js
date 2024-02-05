
class User{
    constructor(username,password,email){
        this.username = username
        this.password = password
        this.email = email
    }

    encryptedPassword(){
        return `${this.password}hello`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const userDetails = new User("nandan","123")
console.log(userDetails.changeUsername());
console.log(userDetails.encryptedPassword());


//behind the scenes me sab normal function banake perform hote hai

// function User(username, email, password){
//     this.username = username;
//     this.email = email;
//     this.password = password
// }

// User.prototype.encryptPassword = function(){
//     return `${this.password}abc`
// }
// User.prototype.changeUsername = function(){
//     return `${this.username.toUpperCase()}`
// }


// const tea = new User("tea", "tea@gmail.com", "123")

// console.log(tea.encryptPassword());
// console.log(tea.changeUsername());