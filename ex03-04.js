// ex03: welcome your user
// ex04: do it all together

var readlineSync = require('readline-sync');
var welcomeUser = readlineSync.question('may i have name please: ');
console.log('Welcome ' + welcomeUser)