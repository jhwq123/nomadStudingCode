// ArrayMap

const days = ["Mon", "Tue", "Wed", "Thurs", "Fri"];

const addNumber = (day, index) => `#${index+1} ${day}`;

const smilingDays = days.map(addNumber);

console.log(smilingDays);