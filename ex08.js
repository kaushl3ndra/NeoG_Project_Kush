// ex08: function to check the answer



var readlinesync = require('readline-sync');
score = 0;

function play(questions, answers) {
    var userAnswer = readlinesync.question(questions); {
        if (userAnswer === answers) {
            console.log("right")
            score += 1;
        } else {
            console.log("wrong")
        }
        console.log("your score: " + score)

    }
}


// call function


// TypeTwo

// var questionOne = "Enter the Name of Ram ji Wife? "
// var answerOne = "Sita"

// play(questionOne, answerOne);





// TypeOne
play("Enter the Name of Ram ji Wife? ", "Sita")