var readlineSync = require("readline-sync");
let person1 = new Object;
let person2 = new Object;

person1.name = readlineSync.question("Name: ");
person1.age = readlineSync.question("Age: ");
person1.power = readlineSync.question("Power: ");

person2.name = readlineSync.question("Name: ");
person2.age = readlineSync.question("Age: ");
person2.power = readlineSync.question("Power: ");

if(person1.power > person2.power) {
  console.log(person1.name);
}
else if(person1.power < person2.power) {
  console.log(person2.name);
}
else {
  console.log("Both have the same power!!");
}