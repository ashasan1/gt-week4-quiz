var startButton = document.querySelector("#start-button");
var nextButton = document.querySelector("#next-btn");
var questionContainerElement = document.querySelector("#question-container");
var questionElement = document.querySelector("#question");
var answerButtonsElement = document.querySelector("#answer-buttons");
var timePlace = document.querySelector("#timer-h1");
var secondsLeft = 60;
var score = document.querySelector("#score");
score = 0;



var shuffledQuestions;

var currentQuestionIndex;

startButton.addEventListener("click", startGame);
startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    setNextQuestion();
})

function startQuiz() {

    
    var timer = setInterval(function() {
    secondsLeft--;
    timePlace.textContent = secondsLeft;
    if (secondsLeft === 0) {
        clearInterval(timer);
    }

}, 1000);

}


function startGame() {
    console.log("started");
    startButton.setAttribute("style", "display:none");
    shuffledQuestions = questions.sort(() => Math.random() - .5); // might not be needed, shuffles questions
    currentQuestionIndex = 0;
    // questionContainerElement.classList.remove('hide');
    setNextQuestion()
    showScore()
}
function showScore() {
    document.body.append(score);
}


function setNextQuestion() {
    // resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}



function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        var button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn"); // might need to add a btn class to the button
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button);
        
    })

}


function resetState() {
    nextButton.classList.add("hide");
//     while (answerButtonsElement.firstChild) {
//         answerButtonsElement.removeChild(answerButtonsElement.firstchild);
//     }
}


function selectAnswer(i) {
    var selectedButton = i.target;
    var correct = selectedButton.dataset.correct;
    // setStatusClass(document.body, correct);
    // Array.from(answerButtonsElement.children).forEach(button => {
    //     setStatusClass(button, button.dataset.correct);
    // })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = "Restart";
        startButton.classList.remove("hide");
    }

    if (selectedButton = correct) {
        console.log("correct");
        score++;

    } else {
        console.log("incorrect")
    };
    
}

// nextButton.addEventListener("click", removePrevious);

// function setStatusClass(element, correct) {
//     clearStatusClass(element);
//     if (correct) {
//         element.classList.add("correct");
//         console.log("correct")
//     } else {
//         element.classList.add("wrong");
//         console.log("wrong");
//     }

// }

function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");

}

var questions = [
    {
        question: "Commonly used Data types do NOT include ____",
        answers: [
            { text: "wrong", correct: true },
            { text: "string", correct: false},
            { text: "numbers", correct: false},
            { text: "boolean", correct: false},


        ]
    },
    {
        question: "Arrays in JavaScript can be used to store______",
        answers: [
            { text: "right", correct: true },
            { text: "wrong", correct: false},
            { text: "wrong", correct: false},
            { text: "wrong", correct: false},


        ]
    },
    {
        question: "String values must be enclosed within _______ when being assigned to variables",
        answers: [
            { text: "quotes", correct: true },
            { text: "wrong", correct: false},
            { text: "dollar signs", correct: false},
            { text: "wrong", correct: false},


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


