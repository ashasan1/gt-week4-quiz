var questions = [
    {
        question: "var a + var b is an example of a _______",
        answers: [
            { text: "division", correct: false},
            { text: "multiplication", correct: false},
            { text: "concoction", correct: true},
            { text: "math", correct: false},


        ]
    },
    {
        question: "Arrays in JavaScript can be used to store all except______",
        answers: [
            { text: "htmls", correct: true },
            { text: "objects", correct: false},
            { text: "strings", correct: false},
            { text: "arrays", correct: false},


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
            { text: "CSS", correct: true },
            { text: "string", correct: false},
            { text: "numbers", correct: false},
            { text: "boolean", correct: false},


        ]
    },
    {
        question: "Objects use __________",
        answers: [
            { text: "quotes", correct: false },
            { text: "@ symbols", correct: false},
            { text: "dollar signs $", correct: false},
            { text: "curly brackets {}", correct: true},


        ]
    },
    {
        question: "Arrays use _________",
        answers: [
            { text: "curly brackets {} ", correct:false },
            { text: "brackets [] ", correct: true},
            { text: "hashtags #", correct: false},
            { text: "equal signs ==", correct: false},


        ]
    },



]



var startButton = document.querySelector("#start-button");
var nextButton = document.querySelector("#next-btn");
var questionElement = document.querySelector("#question");
var timePlace = document.querySelector("#timer-h1");
var questionSpot = document.querySelector("#question");
var game = document.querySelector("#game");


var answerBtn1 = document.querySelector("#answerBtn1");
var answerBtn2 = document.querySelector("#answerBtn2");
var answerBtn3 = document.querySelector("#answerBtn3");
var answerBtn4 = document.querySelector("#answerBtn4");

var highScoreCont = document.querySelector("#high-score-container");
var username = document.querySelector("#username-options");
var highscore = document.querySelector("#highscore");
var submitBtn = document.querySelector("#submit");

currentQuestion = 0;
currentAnswers = 0;

var secondsLeft = 60;
var score = document.querySelector("#score");
var scoreCount = 0;

nextButton.setAttribute("style", "display:none");
highScoreCont.setAttribute("style", "display:none");

function setMyScore() {
    score.textContent = scoreCount;
}


startButton.addEventListener("click", startQuiz);


function startQuiz() {
    nextButton.setAttribute("style", "display:block");
    
    showQuestion();
    setAnswerButtons();
    setMyScore();
    timer();
    startButton.setAttribute("style", "display:none");
    
}


function timer() {
    
    var timer = setInterval(function() {
    secondsLeft--;
    timePlace.textContent = secondsLeft;
    if (secondsLeft === 0) {
        clearInterval(timer);
    };
    if (secondsLeft === 0) {
        endGame();
    };

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
answerBtn1.addEventListener("click", changeCurrentQuestion);
answerBtn2.addEventListener("click", changeCurrentQuestion);
answerBtn3.addEventListener("click", changeCurrentQuestion);
answerBtn4.addEventListener("click", changeCurrentQuestion);


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
            
            };



function endGame() {
game.setAttribute("style", "display:none");
    highScoreCont.setAttribute("style", "display:block");
    highscore.textContent = scoreCount;
    submitBtn.addEventListener("click", function(event) {
        event.preventDefault();
        saveLastScore();
        renderScore();
    });

   
    function saveLastScore() {
        var userScore = {
            username: username.value,
            highscore: scoreCount,
        };

        localStorage.setItem("userScore", JSON.stringify(userScore));

    }

  function renderScore() {
        var lastScore = JSON.parse(localStorage.getItem("userScore"));
        if (lastScore !== null) {
            document.querySelector("#saved-user").innerHTML = lastScore.username;
            document.querySelector("#saved-score").innerHTML = lastScore.highscore;

        } else {
            return;
        }
    }

    function init() {
        renderScore();
    }
    init();


}