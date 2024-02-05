



function SetUsername(username) {
    this.username = username
    console.log("called");
}

function CreateUsername(username,password,email) {
    
     SetUsername.call(this,username)

    this.password = password
    this.email = email
}

const details = new CreateUsername("nandan",123,"abc@email.com")
console.log(details);


// function SetUsername(username){
//     //complex DB calls
//     this.username = username
//     console.log("called");
// }

// function createUser(username, email, password){
//     SetUsername.call(this, username)
   
//     this.email = email
//     this.password = password
// }

// const chai = new createUser("chai", "chai@fb.com", "123")
// console.log(chai);


//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%//

//********************************* This in Detail  *************************************/

// this keyword

// when use its output

// global - window 
console.log(this);


// function() - window
function abcd() {
    console.log(this);
}
abcd()


// method - Object
obj = {
    name:function(){
        console.log(this.age);
    },
    age:25,
    email:"abc@gmail.com"
}
obj.name()

obj3 = {
    name:()=>{
        console.log(this.age);
    },
    age:28,
    email:"abc@gmail.com"
}
obj3.name()  //ye window dega method me fat arrow nahi chal ta to vo window dega


// func inside method (es5) - window
obj1 = {
    sayName :function(){
        console.log(this.age); //this return obj
        function childFunc(){
            console.log(this);  //but this return window
        }
        childFunc()
    },
    age:22
    
}
obj1.sayName()

// func inside method (es6) - Object
obj2 = {
    name:function(){
        const newfunc=()=>{
            console.log(this);
        }
        newfunc()
    },
    age:3
}
obj2.name()


// constructor func me this ki value - new blank object 
function hello(){
    console.log(this);
}
const ans = new hello()

// event listener pe this ki value - jis elem pe event listener laga history.back.

document.querySelector("button").addEventListener("click",()=>{
    console.log(this);
})//arrow func ke sath window milega 

document.querySelector("button").addEventListener("click",function(){
    console.log(this);
})//normal func ke sath elem milega jis par event laga ho


//call
const obj4 = {name:"nandan"}
function abcd() {
    console.log(this);
}
abcd.call(obj4)

//apply
function hello (a,b,c){
    console.log(this,a,b,c);
}
hello.apply(obj4,[1,2,3])

//bind
function newfunction (){
    console.log(this);
}
const newcallfunc = newfunction.bind(obj4)
newcallfunc()
//bind use for binding current function to new function to call anytime 