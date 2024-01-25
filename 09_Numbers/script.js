// numbers and its methods
const Score = 400;
console.log(Score);

const Balance = new Number(2000);
console.log(Balance);

console.log(Balance.toString());
console.log(Balance.toString().length); // we can can numbaer to string and msnipulate the strings with strings methods.

//methods

console.log(Score.toFixed(2)); // 400.00 this methods is use in while making ecommerce platform.

const myPayment = 10000000;
console.log(myPayment.toLocaleString("en-IN")); // 1,00,00,000 use for defining big value to indian standard.

console.log(Balance.toExponential(2));

const newNumbers = 123.567;
console.log(newNumbers.toPrecision(4)); //123.6
console.log(newNumbers.toPrecision(3)); //124

//++++++++++++++++++++++++++++   MATHS   ++++++++++++++++++++++++++//

console.log(Math.abs(-5)); //this is use to convet negative to positive only work with -values.
console.log(Math.floor(4.6));
console.log(Math.pow(2,2));
console.log(Math.ceil(3.3));
console.log(Math.round(5.6));
console.log(Math.random());
//for 1 to 10
console.log(Math.floor(Math.random()*10)+1);

//***********IMPORTANT FORMULA ***********/

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * ( max - min + 1 ) + min )); //greater then 10

// 0 -> 10
Math.floor(Math.random() * 11);

// 1 -> 10
Math.floor(Math.random() * 10) + 1;

// 5 -> 20
Math.floor(Math.random() * 16) + 5;

// -10 -> (-2)
Math.floor(Math.random() * 9) - 10;


//done

