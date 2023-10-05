console.log("Do not look away!");
console.log("You witness a king's revival...");

window.alert(", and the birth of his new world!");

//comment bruh lol

let firstname = "Ganondorf";
let age = 10000;
let warrior = true;

age = age + 1;

console.log("Demon King", firstname);
console.log("I am", age, "years old");
console.log("I am a ", warrior);

document.getElementById("p1").innerHTML = "Demon King " + firstname;
document.getElementById("p2").innerHTML = "I am " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled: " + warrior;

let army = 10000;
army += 1;
army *= 2;
let extraZonai = army%2;

console.log(army);

let final = 1 + 2 * (3 + 4);
console.log(final);

let weapon = window.prompt("What's your weapon of choice?");
console.log(weapon);


let exp = window.prompt("How many years of experience do you have?");
console.log(typeof exp);
exp = Number(exp);
exp += 1;
console.log("You have ", exp, " years of experience")

//const: a variable that can't be changed.

const PI = 3.1415926;
let radius;
let circumference;

radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);

circumference = 2*PI*radius;
console.log("The circumference is: ", circumference);
