//Type conversions.

//STRING CONVERSIONS.

let someValue = 30;
console.log(typeof someValue);
console.log(typeof (someValue)); //string

//conversion

let stringNumber = (String (someValue));
console.log(stringNumber);
console.log(typeof stringNumber);

let stringNumber2 = ("" +someValue);
console.log(typeof stringNumber2);
console.log(stringNumber2); 


//number conversion

let myString = "30";
console.log(typeof myString); //string

let mynewNumber = (Number (myString));
console.log(mynewNumber); //30

let myNumber = (+ "myString");
console.log(typeof myNumber); //number

let number_1 = null;
console.log(number_1);
console.log(typeof number_1); //object
console.log(Number (number_1)); //0

let myAge = undefined;
console.log(Number (number_1)); //0

let myAddress = true;
console.log(Number (myAddress)); //1

let mynewAddress = false;
console.log(Number (mynewAddress)); //0

let Age = "30c";
console.log(typeof Age); //string
console.log(Number(Age)); //NaN

let myNo = NaN;
console.log(typeof NaN);  //number
console.log(Number(myNo)); //Nan

//BOOLEAN NUMBERS CONVERSION


// Value	                          Becomes…
// 0, null, undefined, NaN, ""	       false
// any other value	                   true

let myBoolean = true;
console.log(typeof myBoolean); //boolean

let myAge1 = 3;
console.log(Boolean(3)); //true



//done