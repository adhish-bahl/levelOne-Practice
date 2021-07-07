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

//calling function
checkPower(person1, person2);

//function for comparing the objects
function checkPower(object1, object2) {

  //calculating length of each name
  var len1 = object1.name.length();
  var len2 = object2.name.length();
  //calculating power using number of charectors
  var lenPow1 = len1 * 35;
  var lenPow2 = len2 * 35;

  //comparing whose length power is greater
  console.log("ACCORDING TO Charectors!!");
  if(lenPow1 > lenPow2) {
    console.log(object1.name);
  }
  else if(lenPow1 < lenPow2) {
    console.log(object2.name);
  }
  else {
    console.log("Both have the same power!!");
  }

  //calculating whose  actual power is greater
  console.log("ACCORDING TO POWER!!");
  if(object1.power > object2.power) {
    console.log(object1.name);
  }
  else if(object1.power < object2.power) {
    console.log(object2.name);
  }
  else {
    console.log("Both have the same power!!");
  }
}