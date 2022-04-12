// ex05: print right/wrong if greater than 25

var readlineSync = require('readline-sync');

var userName = readlineSync.question("You Age is greater than 25? "); {
    if (userName === "yes") {
        console.log("Right")
    } else {
        console.log("wrong")
    }

}