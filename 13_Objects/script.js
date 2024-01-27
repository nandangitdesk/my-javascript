//objects

//singleton- jab object literals ke sath define hota hai tab singleton nahi banta 
//constructor ke hota hai

//how to create objet-this is the constructor method
// const myObj = Object.create(jsUser);

//what is object- it is a combination of key :value pair


const mySym = Symbol("key1");

const jsUser = {

    name:"nandan",
    "fullName":"nandan patil",
    [mySym]: "myKey1",
    email:"abc@email.com",
    isLogd:false,
    phone:353535

}
console.log(jsUser.name);
console.log(jsUser["name"]); //this is the best practice to run
console.log(jsUser["fullName"]); //this is the method 

//Q.) interview  - symbol ko as  a key define kare object me or print kare

console.log( typeof jsUser["mySym"]);  //string
console.log(jsUser["mySym"]); //[sym] isse aise key defined karenge tab symbol as a key defin hoga

jsUser.email = "nandan@email.com";
console.log(jsUser);

//by this method we use this 

// Object.freeze();
//isse kuch change kar sakte


 jsUser.greetings = function() {
    console.log("hello jsuser");
}
console.log(jsUser.greetings());

jsUser.Newgreetings = function(){
    console.log(`hello jsUser,${this.name}`);
}
console.log(jsUser.Newgreetings());

