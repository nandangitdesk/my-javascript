//types of datatypes
//primitive datatypes
//number,string,bigInt,boolean,symbol,null,undefined

const myNumber = 123; //number

const muName = "nandan";  //string

let myBignumber = 123456778n; //typeof bigint-number

let myNull = null;  //type of null - object

let myAddress; //typeof undefined

let isLoggedin = false; //typeof boolean

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id==anotherId); //false

//reference type or non-primitive type

//array,object,functions
//always typeof reference datatypes comes object only

let myArray = ["myname",123,true]
console.log(myArray);
//type of array is object

let myObj = {
    name:"nandan",
    id:1234
}
console.log( myObj); //object type

let myFunction  = function(){
    console.log("hello world");
    console.log(typeof myFunction); //type function show karta hai lekin actual me wo as a object function define hota hai.
}
myFunction();


//done