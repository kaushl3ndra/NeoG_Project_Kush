var readlinesync = require("readline-sync");
score = 0;

function play(questions, answers) {
    var userName = readlinesync.question(questions); {
        if (userName === answers) {
            console.log("You are Right");
            score += 1;
        } else {
            console.log("Wrong, Try Aganin");
        }
        console.log("Score: " + score)
    }
}

// call funct-

var questionOne = {
    question: "who is the wife of Ram ji? ",
    answer: "sita",
}
var questionTwo = {
        question: "who is the wife of shiv ji?  ",
        answer: "parvati",
    }
    // var questionThree = {
    //     question: "who is the wife of Ganesha? ",
    //     answer: "Siddhi"
    // }

var arr = [questionOne, questionTwo];
for (var i = 0; i < arr.length; i++) {
    var currQuestion = arr[i];
    play(currQuestion.question, currQuestion.answer);
}