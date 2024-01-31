//always take first arrgument in this function take 200

// function calculateCartPrice(num1) {
//     return num1
// }
// console.log(calculateCartPrice(200,300,400));   


//so we use rest operator 

// function calculateCartPrice(...num1) {
//     return num1
// }
// console.log(calculateCartPrice(200,300,400));

//we tale multiple parameters this is important for interview purpose

function calculateCartPrice(val1,val2,...num1) {
    return num1
}
console.log(calculateCartPrice(200,300,400,500,600)); //gets 400,500,600 


//function with objects

const user={
    username: "nandan",
    price:100
}
// function reesultObj(anotherObj) {
//     console.log(`username is ${anotherObj.username} and price is ${anotherObj.price}`);
// }
// reesultObj(user)

function reesultObj(anotherObj) {
    console.log(`username is ${anotherObj.username} and price is ${anotherObj.price}`);
}
reesultObj({
    username:"nandini",
    price:200
})

//functions with arrays

// const myArray = [200,300,400,500]

// function newArray(anotherArray) {
//     return anotherArray
// }
// console.log(newArray(myArray));  //[200,300,400,500]

// const myArray = [200,300,400,500]

// function newArray(anotherArray) {
//     return anotherArray[2]
// }
// console.log(newArray(myArray));  //400


const myArray = [200,300,400,500]

function newArray(anotherArray) {
    return anotherArray[2]
}
console.log(newArray([400,500,600,800,100]));  //600
