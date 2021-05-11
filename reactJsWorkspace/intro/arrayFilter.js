// arrayFilter

// const numbers = [23423, 523542, 52423, 5235235, 654, 657, 45, 3454, 7474, 934973, 83, 24, 5, 4, 26, 4, 6, 7, 8, 30, 45, 3, 1]
// const testCondition = number => number > 15
// const biggerThan15 = numbers.filter(testCondition);
// console.log(biggerThan15);

let posts = ["Hi", "Hello", "Bye"];

posts = posts.filter(post => post !== "Bye");

console.log(posts);