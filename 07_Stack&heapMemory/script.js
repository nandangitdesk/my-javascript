//Stack and heap memory
//stack memory are used in primitive types of datatypes they provide copy to other variable
//example

let myName = "nandan";
let myNewname = myName;

myNewname = "namrata";
console.log(myName); //nandan
console.log(myNewname); //namrata
//in this example 1st variable only provide copy to another variable that's why after further modification 1st variable not changed its value its called stack memory

//heap memory are used in non- primitive types of datatypes in that memory provide reference to another memory

//lets take a example

let userOne = {
    email : "abc@email.com",
    phone : 123456
  }
let userTwo = userOne;

userTwo.email = "pqr@email.com";
console.log(userOne); //pqr@email.com 
console.log(userTwo); //pqr@email.com

//its changed itself who provide reference to other memory when other-memory changes some things

//done