var readlineSync = require("readline-sync");
var studentName = [];
var unitMarks = [];
var prefinalMarks = [];
var finalMarks = [];
let sum = 0;

for(let i = 0; i < 5; i++) {
  studentName[i] = readlineSync.question("Name: ");
  unitMarks[i] = readlineSync.question("Unit Test Marks: ");
  prefinalMarks[i] = readlineSync.question("Pre-final Marks: ");
  finalMarks[i] = readlineSync.question("Final Marks: ");
  sum = sum + unitMarks[i] + prefinalMarks[i] + finalMarks[i];
}

console.log(studentName.length);

// console.log("yooo");