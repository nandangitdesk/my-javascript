const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 1 completed");
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("promiseOne is consumed");
})

new Promise((resolve,reject)=>{
    setTimeout(()=>{
       console.log("network task completed");
       resolve()
    },1000)
}).then(()=>{
    console.log("new promise is consumed");
})




const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({username:"nandan",age:21})
    })
})

promiseThree
.then((user)=>{
   console.log(user);
})




const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
       let error = true;
       if (!error) {
        resolve({username:"nandan",password:1234,email:"nandan@email.com"})  // resolve me hum kuch bhi pass kar sakte hai array,obj
       }else{
        reject("Error:Something went wrong")
       }
    },1000)
})

promiseFour
.then((userinfo)=>{
    console.log(userinfo);
    return userinfo.username  //ye return to hua lekin gaya kaha ye dekhne ke liye channing use ki hai ye esay method hai
})
.then((username)=>{
    console.log(username);
})
.catch((error)=>{
    console.log(error);
})// ye error ke liye use karte hai
.finally(()=>{
    console.log("something is done between resolve or reject");
})// finally hamesha excute to hoga hi 


const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
       let error = true;
       if (!error) {
        resolve({username:"javascript",password:1234,email:"nandan@email.com"})  // resolve me hum kuch bhi pass kar sakte hai array,obj
       }else{
        reject("Error:javascript went wrong")
       }
    },1000)
})

//async and await se consumed karenge

async function consumedPromiseFive() {  //async & await se error handle nahi kar pate isliye try catch ka use kare nahi to .then().catch() wala   pehla metthod bhi hai use karne ke liye

   try {
    const response = await promiseFive
    console.log(response);
   } catch (error) {
    console.log(error);
   }
  
}
consumedPromiseFive()



//fetch  , fetch pehle show ho raha hai kyo ki use first priority milti hai

fetch('https://dummyjson.com/products/1')
.then((response)=>{
      return response.json()
})
.then((data)=>{
    console.log(data);
    return data.price
})
.then((info)=>{
    console.log(info);
})
.catch((error)=>{
    console.log(error);
})


async function fetchAndDisplayData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        data.forEach(post => {
            console.log(post.title);
        });
    } catch (error) {
        console.error('Error fetching and displaying data:', error);
    }
}

// Call the function
fetchAndDisplayData();
