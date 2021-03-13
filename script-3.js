var startButton = document.querySelector("#start-button");
var nextButton = document.querySelector("#next-btn");
var questionElement = document.querySelector("#question");
var timePlace = document.querySelector("#timer-h1");
var questionSpot = document.querySelector("#question");


var answerBtn1 = document.querySelector("#answerBtn1");
var answerBtn2 = document.querySelector("#answerBtn2");
var answerBtn3 = document.querySelector("#answerBtn3");
var answerBtn4 = document.querySelector("#answerBtn4");

currentQuestion = 0;
currentAnswers = 0;

var secondsLeft = 60;
var score = document.querySelector("#score");


startButton.addEventListener("click", startQuiz);



function startQuiz() {
    
    showQuestion();
    setAnswerButtons();
    
    var timer = setInterval(function() {
    secondsLeft--;
    timePlace.textContent = secondsLeft;
    if (secondsLeft === 0) {
        clearInterval(timer);
    }

}, 1000);

}


function showQuestion() {
    questionSpot.innerHTML = questions[currentQuestion].question;

}

function setAnswerButtons() {
    answerBtn1.innerHTML = questions[currentQuestion].answers[0].text;
    answerBtn2.innerHTML = questions[currentQuestion].answers[1].text;
    answerBtn3.innerHTML =questions[currentQuestion].answers[2].text;
    answerBtn4.innerHTML =questions[currentQuestion].answers[3].text;

}

nextButton.addEventListener("click", changeCurrentQuestion);

function changeCurrentQuestion() {
    currentQuestion++;
    showQuestion();
    setAnswerButtons();
};

answerBtn1.addEventListener("click", checkAnswer);
answerBtn2.addEventListener("click", checkAnswer);
answerBtn3.addEventListener("click", checkAnswer);
answerBtn4.addEventListener("click", checkAnswer);

function checkAnswer() {
    if (questions[currentQuestion].answers[0].correct = true) {
        console.log("correct")
    } else {
        console.log("wrong");
    };

    if (questions[currentQuestion].answers[1].correct = true) {
        console.log("correct")
    } else if (questions[currentQuestion].answers[1].correct = false){
        console.log("wrong");
    }



}

var questions = [
    {
        question: "Commonly used Data types do NOT include ____",
        answers: [
            { text: "right answer", correct: true},
            { text: "string", correct: false},
            { text: "numbers", correct: false},
            { text: "boolean", correct: false},


        ]
    },
    {
        question: "Arrays in JavaScript can be used to store______",
        answers: [
            { text: "right answer", correct: true },
            { text: "wrong", correct: false},
            { text: "wrong", correct: false},
            { text: "wrong", correct: false},


        ]
    },
    {
        question: "String values must be enclosed within _______ when being assigned to variables",
        answers: [
            { text: "quotes", correct: true },
            { text: "# symbols", correct: false},
            { text: "dollar signs", correct: false},
            { text: "curly brackets", correct: false},


        ]
    },
    {
        question: "Commonly used Data types do NOT include ____",
        answers: [
            { text: "wrong", correct: true },
            { text: "string", correct: false},
            { text: "numbers", correct: false},
            { text: "boolean", correct: false},


        ]
    }



]



