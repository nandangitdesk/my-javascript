// if
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

// const userLoggedIn = true
// const debitCard = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = true

// if (userLoggedIn && debitCard && 2==3) {
//     console.log("Allow to buy course");
// }

// if (loggedInFromGoogle || loggedInFromEmail) {
//     console.log("User logged in");
// }


let gamePrice = 100;

if (gamePrice<=100) {
    console.log("price is worthy");
}


const weather = "cloudy";

if (weather==="hot") {
    console.log("its very hot");
} else {
    console.log("its cloudy");
}


const resultMarks = 80;

if (resultMarks===100) {
    console.log("o grade");
}
else if (resultMarks>=85) {
    console.log("a+ grade");
}
else if (resultMarks>=75) {
    console.log("a grade");
}
else if (resultMarks>=65) {
    console.log("b grade");
}
else {
     console.log("you did well in exam");
}


//operators  ,and operator ( && ) in that both condition is true , or operator ( || ) in that any one is true then executed

const userLoggedIn = 0
const debitCard = true

if (userLoggedIn && debitCard) {
    console.log("excuted");
}
if (userLoggedIn || debitCard) {
    console.log("excuted");
}

//switch statement

const weekDays = "tuesday"

switch (weekDays) {
    case "sunday":
        console.log(" its sunday");
        break;
    case "monday" :
        console.log("its monday");
        break;
    case "tuesday" :
        console.log("its tuesday");
        break;
    case "wednesday":
        console.log("its wednesday");
        break;
    case "thursday":
        console.log("its thursday");
        break;

    default:
        console.log("day is invalid");
        break;
}





const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")