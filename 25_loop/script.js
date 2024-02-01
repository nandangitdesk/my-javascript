//for loop

for (let index = 0; index <=10; index++) {
    const element = index;
    console.log(element);
}

for (let i= 1; i <=10; i++) {

    console.log(`inside outer loop ${i}`);
    for (let j = 1; j <=10; j++) {
        console.log(i + "*" + j + "= "+ i*j);
        
    }
    
}

const myArray =  [1 ,2,3,4,5]
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray;
    console.log(element);
    
}

//break and continue

for (let i = 0; i <=10; i++) {
    if (i===5) {
        console.log("5 is detected");
        break
    }
    const element = i;
    console.log(element);
}

for (let j = 0; j <=10; j++) {
    if (j===5) {
        console.log("5 is detected");
        continue
    }
    const element = j;
    console.log(element);
}

// for (let i = 0; i <=10; i++) {
//     const element = array[i];
    
// }


// let myNumber = 0;
// while (myNumber  <= 10) {
//     console.log(`value of myNmber ${myNumber}`);
//     myNumber += myNumber;
// }
