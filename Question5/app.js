var readlineSync = require("readline-sync");
var studentName = [];
var unitMarks = [];
var prefinalMarks = [];
var finalMarks = [];
var sum = [];

for(let i = 0; i < 5; i++) {
  studentName[i] = readlineSync.question("Name: ");
  unitMarks[i] = readlineSync.question("Unit Test Marks: ");
  prefinalMarks[i] = readlineSync.question("Pre-final Marks: ");
  finalMarks[i] = readlineSync.question("Final Marks: ");
  sum[i] = unitMarks[i] + prefinalMarks[i] + finalMarks[i];
}

var max = 0;
for(var i = 0; i < 5; i++) {
  if(sum[max] < sum[i]) {
    max = i;
  }
}

console.log(studentName[max], " has the heighest marks!");

// console.log(studentName.length);

// console.log("yooo");