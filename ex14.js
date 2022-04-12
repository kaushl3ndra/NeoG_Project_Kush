// ex14: club everything to make the game



var readlinesync = require("readline-sync");
scoreChart = [


    "scorechart",


    {
        name: "kaushal",
        score: 0,
    },
    {
        name: "karan",
        score: 1,
    },
    {
        name: "rahul",
        score: 2,


    },

]
console.log(scoreChart);



var welcomeSide = readlinesync.question("Enter Your Name? ")
console.log("Welcome " + welcomeSide)

score = 0;

function play(questions, answer) {

    var userName = readlinesync.question(questions); {
        console.log("You Entered : " + userName);
        if (userName === answer) {
            console.log("You are Right");
            score += 2;
        } else {
            console.log("You are Wrong");
        }
        console.log("Score: " + score);
    }
}


// call function

var questions = [{

        question: `
        Python is _____ programming language.

        a: hight-level
        b: mid-level
        c: low-level \n`,

        answer: "a",
    },
    {
        question: `
    Which one of these is a JavaScript package manager?"
        a: Node.js
        b: TypeScript
        c: npm \n`,

        answer: "c",
    },
    {
        question: `
        Which of the following is not a programming language?

	a: Typscript
	b: Java
	c: Anaconda \n`,
        answer: "c",
    },
    {
        question: `
        Which of the following includes Chrome's V8 JavaScript Engine?
        a: JQuery
        b: Node.js
        c: java \n`,

        answer: "b"
    },
    {
        question: `
    How do you call a function named "myFunction"?
    a: myFunction()
    b:  call myFunction()
    c:  call function myFunction() \n`,

        answer: "a"



    }
];

for (var i = 0; i < questions.length; i++) {
    currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);






};


{

    console.log("your Final Score: " + score);
}