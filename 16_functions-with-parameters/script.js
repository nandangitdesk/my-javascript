//functions with parameters


function saymyName() {
    console.log("nandan");
}
saymyName();

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers(3,5);

// function addTwoNumbers(number1,number2) {

//     return number1 + number2
    
// }
// const result = addTwoNumbers(3,5);
// console.log(result);


function addTwoNumbers(number1,number2) {

    let result = number1 + number2
    return result
    
}
const result = addTwoNumbers(3,5);
console.log(result);


function userloggedinfo(username) {
    if (!username) {
        console.log("please enter your name");
        return
    }
    
    return console.log(`${username} is just logged`);
  
//! makes true to false and false to true
//ek baar return kar diya to uske baad kuch bhi kaam nahi kar sakte 
}
userloggedinfo("");