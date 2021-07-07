//importing readline-sync library
var readlineSync = require("readline-sync");
//declaring objects
let person1 = new Object;
let person2 = new Object;

//input for person 1
person1.name = readlineSync.question("Name: ");
person1.age = readlineSync.question("Age: ");
person1.power = readlineSync.question("Power: ");

//input for person 2
person2.name = readlineSync.question("Name: ");
person2.age = readlineSync.question("Age: ");
person2.power = readlineSync.question("Power: ");

//comparing and displaying!
if(person1.power > person2.power) {
  console.log(person1.name);
}
else if(person1.power < person2.power) {
  console.log(person2.name);
}
else {
  console.log("Both have the same power!!");
}