// ex02: read the name of your user

var readlineSync = require('readline-sync');


var userName = readlineSync.question('May I  have your name: ');
console.log(userName);