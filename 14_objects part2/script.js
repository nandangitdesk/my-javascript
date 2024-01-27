const tinderUser = {};
tinderUser.email = "abc@gmail.com";
tinderUser.isloggedIn = true;
tinderUser.id = 12345;

console.log(tinderUser);

const anotherUser =  new Object(tinderUser);

console.log(anotherUser);

const resgesterdUser = {
    id:1234,
    fullName:{
        userName:{
            firstName:"nandan",
            lastName :"patil"
        }
    }

}
console.log(resgesterdUser.fullName.userName.firstName);

const newObj = {1:"a", 2:"b"}
const newObj1 = {3:"a", 4:"b"}
const newObj2 = {5:"a", 6:"b"}

//concatination of object

// const newObj3 = console.log(Object.assign({},newObj,newObj1,newObj2));  //1st-method

// Object.assign(target)
// Object.assign(target, source1)
// Object.assign(target, source1, source2)
// Object.assign(target, source1, source2, /* …, */ sourceN)




const newObj4 = {...newObj , ...newObj1 , ...newObj2 }; //2nd - method  mostly use this
console.log(newObj4);

// const anotherObj = [
//     {
//         name : "a"
//     }
//     {
//         myName : "b"
//     }
//     {
//         yourName : "c"
//     }
//     {
//         userName : "d"
//     }
// ]

// anotherObj[1].myName

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
// console.log(Object.length(tinderUser));

console.log(tinderUser.hasOwnProperty("islogg"));