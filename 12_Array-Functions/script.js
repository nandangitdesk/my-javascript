

const myArr = [1,2,3,4,5,6,7]
const myArr1 = [8,9,10];
const myArr2 = myArr.concat(myArr1)
console.log(myArr2);   //concatination of array


const myArr3 = [11,12,13,14,15];

const myArr4 =[...myArr, ...myArr1 ,...myArr3]; //this is use to concat multiple arrays 
console.log(myArr4);

console.log(Array.isArray("nandan")); //false 



const Score1 = 100;

const Score2 = 200;

const Score3 = 300;

const newScore =Array.of( Score1 , Score2 , Score3 );
console.log(newScore);
 

const newArray = "Nandan";
console.log(Array.from("Nandan"));

console.log(Array.from({name:"nandan"}));  //intresting in javascript ,interview question 

const anotherArray = [1,2,3,[4,,5,[6,7]],"true"];
console.log(anotherArray.flat(Infinity));
console.log(anotherArray.flat(1));            