// Classes

class Human {
    constructor(name, lastName){
        this.name = name;
        this.lastName = lastName;
    }
}

// const GPMonkey = new Human("Monkey", "GP")
// console.log(GPMonkey);

class Baby extends Human {
    cry(){
        console.log("waaaaaaaa");
    }
    sayName(){
        console.log(`My name is ${this.name}`)
    }
}

const myBaby = new Baby("mini me", "me");

console.log(myBaby.cry(), myBaby.sayName());