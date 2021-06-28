const readLine-sync = require("readline-sync");
let news = readlineSync.question("News: ");
let sourse = readlineSync.question("Sourse: ");

let fakeSourses = ["whatapp", "facebook", "telegram"];

for(let i = 0; i < 3; i++) {
  if(sourse.toLowerCase() == fakeSourses[i]) {
    console.log("DOn't believe on news from FB or Whatsapp or Telegram.");
  } else {
    console.log("News is valid!!");
  }
}