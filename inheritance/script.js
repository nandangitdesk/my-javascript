class user{
    constructor(username){
        this.username =username
    }
    logMe(){
        console.log(`logged in ${this.username}`);
    }
    
}

class Teacher extends user{
    constructor(username,email,password){
        super(username)     // super keyword work very effeciently

        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(` new course added by ${this.username}`);
    }
}

const userDetails = new Teacher("nandan","abc@gmail.com",30)
userDetails.addCourse()

const userData = new user("priyanka")
userData.logMe()


// prototypal inheritance

function makeHuman(username,age,email){
    this.username = username;
    this.age = age;
    this.email= email;
    
}
makeHuman.prototype.printMyname = function(){
    console.log(this.username);
}
const human1 = new makeHuman("nandan",21,"abc@.com")
const human2 = new makeHuman("priya",21,"pqr@.com")