//arrays and is methods

const myArr = [1,2,3,4,5,6]
console.log(myArr);

console.log(myArr.length);

console.log(myArr.indexOf(4)); //3

console.log(myArr.push(7));

console.log(myArr.pop(7));
console.log(myArr);

console.log(myArr.unshift(0));  //add element to the first
console.log(myArr);

console.log(myArr.shift());      // remove the first element of the array
console.log(myArr.length); 

console.log(myArr.includes(8));  //false 

const newArr =(myArr.join());
console.log(typeof newArr);  //string

const newArr1 = ["apple","pomogranete","banana"];
console.log(newArr1.sort());

console.log(myArr.slice(1,4));
console.log("a",myArr);  //it doesn't modify the array after slice operations


const newArr2 = myArr;

console.log(newArr2.splice(1,4));
console.log("b",newArr2);   //its fully modify the array aftr splice opertions


