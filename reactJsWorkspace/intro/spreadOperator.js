// Spread Operator

const days = ["Mon", "Tue", "Wed"];
const otherDays = ["Thu", "Fri", "Sat"];

// const allDays = days + otherDays;
let allDays = [...days, ...otherDays, "sun"];

console.log(allDays);

const ob = {
    first: "hi",
    second: "hello"
};

const ab = {
    third: "bye bye"
};

const two = {...ob, ...ab};

console.log(two);