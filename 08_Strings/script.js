const Name = "nandan";
const Age = 21;

console.log(Name  +  Age); // this is bad practice for concat the string 

console.log(`my name is ${Name} i am ${Age} years old.`); // this is the modern way follow this

console.log(Name.concat(' ', Age)); // 3rd method of concat

const newString = new String("nandan");
console.log(newString);  // this is also another way to asign new string

const gameName = "pokemon";
console.log(gameName.indexOf("e")); //3

console.log(gameName.__proto__);

console.log(gameName.charAt(5));  //o

const newGame = console.log(gameName.toUpperCase());

console.log(newGame);
//POKEMON

console.log(newGame===gameName); //false bcz its primitive type and use stack memory

console.log(gameName.endsWith("n",8)); //true


console.log(` i want to play game like ${gameName.repeat(3)}`); //pokemonpokemonpokemon

console.log(gameName.replace("pokemon","shadow fight")); //shadow fight

console.log(gameName.slice(4)); //mon
console.log(gameName.slice(1,5)); //okem
console.log(gameName.slice(5,-1)); //o

const myName = "  nandan   "
console.log(myName.trim()); //delete the whitespaces


//done
