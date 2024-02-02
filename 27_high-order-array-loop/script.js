//for of loop

const coding=["js","cpp","java","py"]
for (const key of coding) {
    console.log(key);
}

const greetings = "hello world"
for (const greet of greetings) {
    console.log(`character is ${greet}`);
}

// const myObj={
//     game1 : "GTA",
//     game2 : "MARIO"
// }
//  for (const [key] of myObj) {
//      console.log(myObj[key]);
//  }
// for of se iterate nahi ho raha dusra try karenge

//map -forof

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


console.log(map);

for (const [key,value] of map) {
    console.log(key, ":-" ,value);
}

///forin loop

const programmingLanguage = {
    js:"javascript",
    py:"python",
    cpp:"c++",
    rb:"Ruby by Apple"
}

for (const key in programmingLanguage) {
   console.log(`${key} is the shortcut of ${programmingLanguage[key]}`);
}




const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}


// const newmap = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")


// console.log(newmap);
// for (const key in newmap) {
//     console.log(newmap);
// }


//foreach

const myHeros = ["spiderman","batman","hulk","thanos","blackpanther"]

// myHeros.forEach(function(val) {
//     console.log(val);
// });
// myHeros.forEach((val)=> {
//     console.log(val);
// });

//foreach loop is inbuilt in arrays and it uses callback func so we dont have o give func name

function printme(item) {
    console.log(item);
}

myHeros.forEach(printme)
// myHeros.forEach(printme)
// myHeros.forEach(printme)

//make func and use foreach 

const myCars = ["alto","creta","jeepCompass","BMW","Ferrari"]

myCars.forEach((item,index,arr)=>{

    console.log(item,index,arr);
})

const secondHandCars = [
    {
        carName :"Wagnor",
        carPrice :70000
    },
    {
        carName :"creta",
        carPrice :170000
    },
    {
        carName :"jeep",
        carPrice :570000
    }
]

secondHandCars.forEach((item)=>{
    console.log(item.carName);
})

//we can access object values through foreach