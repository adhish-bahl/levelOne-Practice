var readlineSync = require("readline-sync");

var students = [{name, unit, prefinal, final}];

let sum = 0;

for(let i = 0; i < 5; i++) {
  students[i].name = readlineSync.question("Name: ");
  students[i].unit = readlineSync.question("Unit Test Marks: ");
  students[i].prefinal = readlineSync.question("Pre-final Marks: ");
  students[i].final = readlineSync.question("Final Marks: ");
  sum = sum + students[i].unit + students[i].prefinal + students[i].final;
}