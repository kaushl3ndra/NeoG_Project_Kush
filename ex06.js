// ex06: increment score if the right answer

var readlineSync = require('readline-sync');
var score = 0

var userAnswer = readlineSync.question("Are you from city Lucknow? "); {
    if (userAnswer === "yes") {
        console.log("Right")
        score = score + 1;
    } else {
        console.log("Wrong")
    }
    console.log("Your score is " + score)
}



// second way

var readlineSync = require('readline-sync');
var score = 0
var questionOne = "Are you from city Lucknow? "
var ansOne = "yes"
var userAnswer = readlineSync.question(questionOne); {
    if (userAnswer === ansOne) {
        console.log("Right")
        score = score + 1;
    } else {
        console.log("Wrong")
    }
    console.log("Your score is " + score)
}