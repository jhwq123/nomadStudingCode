// forEach_include_push

// let posts = ["Hi", "Hello", "Bye"];
// posts.forEach(post => console.log(post));
// posts.push("new");
// console.log(posts);

let greetings = ["Hi", "Hello", "Howdy", "Suup"];

if(greetings.includes("Hello")){
    greetings.push("Hello");
}

greetings.reverse();

console.log(greetings);