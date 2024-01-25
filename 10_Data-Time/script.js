 let myDate = new Date ();
 console.log(myDate);

 console.log(typeof myDate);  //object interview question

 console.log(myDate.toString());

 console.log(myDate.toDateString());

 console.log(myDate.toJSON());

 console.log(myDate.toLocaleDateString());

 console.log(myDate.toLocaleString());

 console.log(myDate.toTimeString());

 let mycreatedDate = Date.now();
 console.log(mycreatedDate);
 console.log(mycreatedDate.toLocaleString());

 console.log(myDate.getDate());
 console.log(myDate.getFullYear());
 console.log(myDate.getHours());
 console.log(myDate.getMonth()+1); //+1 lagake 1 se value milti hai nahi 0  index se start hoti hai

 let todayDate = new Date (2023,0,5,6,17);
 console.log(todayDate.toString());

 todayDate.toLocaleString('default',{
   weekday : "long"

 })

 console.log(Math.floor(Date.now() / 1000 ));

let timeStamp = new Date ();
console.log(timeStamp);