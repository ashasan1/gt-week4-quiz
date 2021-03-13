var questionPlace = document.querySelector("#questionSpace");
var timePlace = document.querySelector("#timer-h1");
var startBtn = document.querySelector("#start-button");
var secondsLeft = 60

startBtn.addEventListener("click", startQuiz);

function startQuiz() {

    
    var timer = setInterval(function() {
    secondsLeft--;
    timePlace.textContent = secondsLeft;
    if (secondsLeft === 0) {
        clearInterval(timer);
    }

}, 1000);

}

var answerSpot0 = document.querySelector("#answerSpace1");
var answerSpot1 = document.querySelector("#answerSpace2");
var answerSpot2 = document.querySelector("#answerSpace3");
var answerSpot3 = document.querySelector("#answerSpace4");

questionTextArray = ["Commonly used Data types do NOT include", "Arrays in JavaScript can be used to store", "String values must be enclosed within _______ when being assigned to variables", "question3", "question4", "question5"];
var answersZero = ["string", "numbers", "hoopla", "variables"];
var answersOne = ["numbers", "strings", "other right answer", "hoopla"];
var answersTwo = ["dollar signs", "curly brackets", "quotes", "# symbols"];
var answersThree = []
    

var testBtn = document.querySelector("#testButton");


num = 0;

testBtn.addEventListener("click", log);

function log() {
    num++;
    console.log(num);
    var currentQues = questionTextArray[num];
    console.log(currentQues);
    questionPlace.textContent = currentQues;
    console.log(questionPlace);
}

answerSpot0.textContent = answersZero[0];

testBtn.addEventListener("click", changeAnswer)
function changeAnswer() {
    
}

// function changeQuestion() {
//     i = 0;
//     questionPlace.textContent = questionTextArray[i];
// }
// function loop() {
//     for (var i = 0; i < questionTextArray.length; i++) {

//     console.log(questionTextArray[i]);
// } 
// }


// var questionZero= questionTextArray[0];
// questionPlace.textContent = questionZero;


// answerSpot0.textContent = answersZero[0];
// answerSpot1.textContent = answersZero[1];
// answerSpot2.textContent = answersZero[2];
// answerSpot3.textContent = answersZero[3];

// answerSpot0.addEventListener("click", checkAnswerWrong);
// answerSpot1.addEventListener("click", checkAnswerWrong);
// answerSpot2.addEventListener("click", checkAnswerRight);
// answerSpot3.addEventListener("click", checkAnswerWrong);


// function checkAnswerRight() {
//    console.log("right");
// }

// function checkAnswerWrong() {
// console.log("wrong");
// secondsLeft - 10;

// }





// }




//timer

