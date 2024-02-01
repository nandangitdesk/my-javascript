

//++++++++++interview point++++++++++++++//
//* Browser ke pass jo global object hai wo window object hai  *//

// const user = {
//     username:"nandan",
//     price : 999,

//     welcomeMessage(){
//      console.log(`${this.username}, welcome to website`);
//         console.log(this);  //this return current context 
//     }
// }
// user.welcomeMessage()
// user.username="priya"
// user.welcomeMessage()

const user = {
    username:"nandan",
    price : 999,

    welcomeMessage(){
     console.log(`${this.username}, welcome to website`);
        // console.log(this);  //this return current context 
    }
}
user.welcomeMessage()
user.username="priya"
user.welcomeMessage()

console.log(this);

//this in functions

// function one() {
//     console.log(this);
// }
// one()

// function one() {
//     let username = "nandan"
//     console.log(this.username);
// }
// one()

const two=function() {
    let username = "nandan"
    console.log(this.username);
}
two()

const three = () => {
    let username = "PRIYA"
    console.log(this);
}
three()

//arrow function 
//() => {}

//implicit return means you don't use return keyword
//explicit return means when you use return keyword

// const addTwo = (num1 , num2) => {
//       return num1 + num2
// }

// const addTwo = (num1 , num2) => return num1 + num2

// const addTwo = (num1 , num2) => num1 + num2

// const addTwo = (num1 , num2) => ( num1 + num2 ) // this is more important in react to return implicitly with paranthesies


const addTwo = (num1 , num2) => ({username:"nandan",price:999})
console.log(addTwo());


//syntax for array

myArray = [1,2,34,4]
myArray.forEach( () => {});
