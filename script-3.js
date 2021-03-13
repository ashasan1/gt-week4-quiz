var questions = [
    {
        question: "Commonly used Data types do NOT include ____",
        answers: [
            { text: "right answer", correct: true},
            { text: "string", correct:false},
            { text: "numbers", correct:false},
            { text: "boolean", correct:false},


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
var scoreCount = 0;

function setMyScore() {
    score.textContent = scoreCount;
}


startButton.addEventListener("click", startQuiz);


function startQuiz() {
    showQuestion();
    setAnswerButtons();
    setMyScore();
    timer();
}


function timer() {
    
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
    if(currentQuestion <= questions.length) {
        currentQuestion++;
    }
    
    showQuestion();
    setAnswerButtons();
    setMyScore();
};

answerBtn1.addEventListener("click", checkAnswerOne);
answerBtn2.addEventListener("click", checkAnswerTwo);
answerBtn3.addEventListener("click", checkAnswerThree);
answerBtn4.addEventListener("click", checkAnswerFour);

function checkAnswerOne() {
var answerOne = questions[currentQuestion].answers[0].correct;

if (answerOne === true) {
    console.log("correct");
    scoreCount++;
} else if (answerOne === false){
    console.log("wrong");
};
}


function checkAnswerTwo() {
    var answerTwo = questions[currentQuestion].answers[1].correct;
    
    
    if (answerTwo === true) {
        console.log("correct");
        scoreCount++;
    } else if (answerTwo === false) {
        console.log("wrong");
    };
    }


    function checkAnswerThree() {
      
        var answerThree = questions[currentQuestion].answers[2].correct;
        
        
        if (answerThree === true) {
            console.log("correct");
            scoreCount++;
        } else if (answerThree === false) {
            console.log("wrong");
        };
        
        }


        function checkAnswerFour() {
            var answerFour = questions[currentQuestion].answers[3].correct;
            
            if (answerFour === true) {
                console.log("correct");
                scoreCount++;
            } else if (answerFour === false) {
                console.log("wrong");
            };
            
            }
