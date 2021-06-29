var readlineSync = require("readline-sync");
let person1 = new Object;
let person2 = new Object;

person1.name = readlineSync.question("Name: ");
person1.age = readlineSync.question("Age: ");
person1.power = readlineSync.question("Power: ");

person2.name = readlineSync.question("Name: ");
person2.age = readlineSync.question("Age: ");
person2.power = readlineSync.question("Power: ");