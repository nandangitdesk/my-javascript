

function one() {
    const username = "nandan";
    function two() {
        const website = "vscode";
        console.log(username);
    }
    // console.log(website);
    two();
}
one();

if (true) {
    const username = "priyanka";
    if (username==="priyanka") {
        const otherUser = "nandan";
        console.log(username);   // ye print ho raha hai bcz wo apne parent ke andar hi hai
    }
    // console.log(otherUser);
}

//+++++++++++++++++++++++++++INTRESTING++++++++++++++++++++++++++++++//


//function declaration

// function addOne(num1) {
//     return num1 + 1 
// }
// console.log(addOne(6));


console.log(addOne(6));
function addOne(num1) {
    return num1 + 1 
}

//function expression

// const addtwo = function(num2){
//     return num2  + 2 
// }
// console.log(addtwo(6));


// in function expression calling of function before is not support

console.log(addtwo(6));
const addtwo = function(num2){
    return num2  + 2 
}
//getting error