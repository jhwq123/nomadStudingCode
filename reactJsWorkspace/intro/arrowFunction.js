// function sayHello(name = "user"){
//     return "Hello " + name;
// }
const button = document.querySelector("button");
const sayHello = (name = "Human") => "Hello " + name;

const monkey = sayHello();

// const handleClick = (event) => console.log(event);
button.addEventListener("click", event => console.log(event));

console.log(monkey);