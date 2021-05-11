// backthicks
// Object Destructuring

const human = {
    name: "Monkey",
    lastName: "GP",
    nationality: "I was Korean",
    favFood: {
        breakfast: "sang",
        lunch: "noodle",
        dinner: "steak" + "bulgogi"
    }
};

// const name = human.name; // sucks
// const lastName = human.lastName; // sucks

// const dinner = human.favFood.dinner; // sucks

const {name, lastName, nationality: difName, favFood: {dinner, breakfast, lunch}} = human; // great

console.log(name, lastName, difName, dinner, breakfast, lunch);



