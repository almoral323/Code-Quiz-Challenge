var timerEl = document.getElementById("timer");
var timeLeft = 60;
var startbtn = document.getElementById("start-btn");
var startscreen = document.getElementById("start-screen");
var quizscreen = document.getElementById("question-container");
var question = document.getElementById("question");
var answerA = document.getElementById("btn-a");
var answerB = document.getElementById("btn-b");
var answerC = document.getElementById("btn-c");
var answerD = document.getElementById("btn-d");
var check = document.getElementById("results");
var donescreen = document.getElementById("done-screen");
var scorescreen = document.getElementById("high-scores-screen");
var quizscore = document.getElementById("final-score");
var score = 1;


var questionsindex = 0; 

const QuestionsAnswers = [
    {
        q: "Commonly used data types DO Not Include:",
        a: "strings",
        b: "booleans",
        c: "alerts",
        d: "numbers",
        z: "alerts",
    },
    {
        q: "The condition in an if / else statement is enclosed with ________.",
        a: "quotes",
        b: "curly brackets",
        c: "parenthesis",
        d: "square brackets",
        z: "parenthesis",
    },
    {
        q: "Arrays in JavaScript can be used to store _______.",
        a: "numbers and strings",
        b: "other arrays",
        c: "booleans",
        d: "all of the above",   
        z: "all of the above",
    },
    {
        q: "String values must be enclosed within _______ when being assigned to variables.",
        a: "commas",
        b: "curly brackets",
        c: "quotes",
        d: "parenthesis",
        z: "quotes",
    },
    {
        q:"A very useful tool used during development and debugging for printing content to the debugger is:",
        a: "JavaScript",
        b: "terminal/bash",
        c: "for loops",
        d: "console.log",
        z: "console.log",
    },
];

function pagestart() {
    donescreen.style.display = "none";
    scorescreen.style.display = "none";
    quizscreen.style.display = "none";
}
pagestart()


function countdown () {
    var timerInterval = setInterval(function () {
        timeLeft--;
        if (timeLeft > 0) {
            timerEl.textContent = "Timer: "+timeLeft;
        
        } else {
            timerEl.textContent = "0";
            clearInterval(timerInterval);
            AllDone();}
        
}, 1000); };

var quizStarts = function () {
    startscreen.style.display = "none";
    quizscreen.style.display = "flex";
    

    displayQuestion()
    countdown()
}

function displayQuestion () {
    var current = QuestionsAnswers[questionsindex]; 
    question.textContent = current.q;
    answerA.textContent = current.a;
    answerB.textContent = current.b;
    answerC.textContent = current.c;
    answerD.textContent = current.d;
    
};

var nextquestion = function () {
    questionsindex++;
    if(questionsindex > 4) {
        AllDone()
    } else {
        displayQuestion();
    }
    

};

var checkAnswer = function (event) {
    
    var current = QuestionsAnswers[questionsindex];
    var userans = event.target.textContent;

    if (userans === current.z) {
      console.log(userans)
      check.textContent = "Correct!";
      score += 1;
      console.log(score)
    } else {
      check.textContent = "Incorrect!";
      score -= 1;
      timeLeft = timeLeft - 10;
      console.log(score)
    }
    nextquestion();
    
 };
 
 
function AllDone () {
    quizscreen.style.display = "none";
    donescreen.style.display = "initial";
    var finalscore = ((score*2)*10)
    quizscore.textContent = "Your final score is " + finalscore + "!";
    console.log(finalscore)
};




 




startbtn.onclick = quizStarts;
