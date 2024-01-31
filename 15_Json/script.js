//object destructuring

const newGame = {
    gamename:"super mario",
    version: 2023,
    mode : "online"
}

// console.log(newGame.gamename);  this is not use specifically in industry bcz it have quiet headche to call multiple time bcz it has long syntax and clumsy.


//this is the best method

const myGame = {gamename : name} = newGame

console.log(name);