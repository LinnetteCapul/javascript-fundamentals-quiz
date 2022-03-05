// make branches for hw
// timed quiz - need to include timer
    // timeer needs to be displayed - count variable?
// need a start button for quiz
    // eventListenerbtn to start quiz timer
// store high scores after each quiz
// what info is needed in the quiz
    // questions, choices for questions, correct answer for questions

// when quiz starts, needs to display first question with possible choices (user clicks on option -> more buttons for each choice)
    // when wrong answer clicked -> needs to show/ prompt that answer is incorrect -> show display message ex: "Incorrect answer"

// when user clicks on choice (whether right or wrong), it will move onto the next question
    // as well as deduct time from incorrect answer
    // if correct, no time deducted

 // when all questions are answered, quiz is finished 
    // display/ show to user that quiz is finished. use prompt? -> message "Quiz is finished"
    // or when timer reaches 0, quiz is finished -> message with ex: "Time's up!"
    // show time left (if any) and score
        // allow user to input their initials for their score
            // need btn to submit score and initials into quiz -> local storage
 
// have way to store high score with initials -> local storage

// need questions in var -> array
    // need to connect each question with possible choices -> <ul> <li>
        // need to connect correct answer with question
        // how to group together -> objects?

// need a start function for quiz
    // start timer when start button is clicked 


//variables for elements
var startQuizDiv = document.getElementById("start-page");
var startQuizButton = document.getElementById("start-btn");

var quizTimer = document.getElementById("timer");
var quizBody = document.getElementById("quiz");
var questionsEl = document.getElementById("questions");
var buttonA = document.getElementById("choice-a");
var buttonB = document.getElementById("choice-b");
var buttonC = document.getElementById("choice-c");
var buttonD = document.getElementById("choice-d");

var highScoreInfo = document.getElementById("high-score-info");
var highScoreDiv = document.getElementById("high-score-page");
var highScore = document.getElementById("high-score");
var endQuiz = document.getElementById("end-quiz");

var quizEndEl = document.getElementById("quiz-end");
var highScoreInitials = document.getElementById("high-score-initials");
var scoreInputInitials = document.getElementById("initials");
var scoreTime = document.getElementById("score-time");
var submitScoreBtn = document.getElementById("submit-score");

var resultEl = document.getElementById("result");
var resultScoreEl = document.getElementById("high-score-result");


// Quiz questions
var quizQuestions = [{

    question: "Which HTML element do we put the JavaScript?",
    choiceA: "&lt;title&gt;",
    choiceB: "&lt;script&gt;",
    choiceC: "&lt;head&gt;",
    choiceD: "&lt;body&gt;",
    correctAnswer: "choice-b"},

  {
    question: "Using _____ statements is how you test for a specific condition.",
    choiceA: "Switch",
    choiceB: "For",
    choiceC: "If",
    choiceD: "Select",
    correctAnswer: "choice-c"},

    {
    question: "JavaScript is what type of langauge?",
    choiceA: "Object-Based",
    choiceB: "Procedural",
    choiceC: "Object-Oriented",
    choiceD: "Interactive",
    correctAnswer: "choice-c"},

    {
    question: "The 'var' and 'function' are known as?",
    choiceA: "Data types",
    choiceB: "Keywords",
    choiceC: "Prototypes",
    choiceD: "Declaration statements",
    correctAnswer: "choice-d"},  

    {
    question: "Which of the following is known as the equality operator, which is used to check whether two values are equal to each other?",
    choiceA: "=",
    choiceB: "==",
    choiceC: "===",
    choiceD: "&&",
    correctAnswer: "choice-b"},
       
    ];

// Start Quiz function starts timer and hides start button. Will display quiz question.
var timeLeft = 61;
var timerInterval;
function startQuiz(){
    quizEndEl.style.display = "none";
    startQuizDiv.style.display = "none";
    generateQuizQuestion();

    //Timer
    timerInterval = setInterval(function() {
        timeLeft--;
        quizTimer.textContent = "Time left: " + timeLeft;
    
        if(timeLeft === 0) {
          clearInterval(timerInterval);
          showScore();
        }
      }, 1000);
    quizBody.style.display = "block";
}

// Function goes through the object array with quiz questions to generate the questions and possible choices.
var currentQuestionIndex = 0;
var lastQuestionIndex = quizQuestions.length;
function generateQuizQuestion(){
    quizEndEl.style.display = "none";
    if (currentQuestionIndex === lastQuestionIndex){
        return showScore();
    } 
    var currentQuestion = quizQuestions[currentQuestionIndex];
    questionsEl.innerHTML = "<p>" + currentQuestion.question + "</p>";
    buttonA.innerHTML = currentQuestion.choiceA;
    buttonB.innerHTML = currentQuestion.choiceB;
    buttonC.innerHTML = currentQuestion.choiceC;
    buttonD.innerHTML = currentQuestion.choiceD;
};

// Function checks the user choice to each question 
var correct;
function checkAnswer(event){
    correct = quizQuestions[currentQuestionIndex].correctAnswer;

    if (event === correct && currentQuestionIndex !== lastQuestionIndex){
        score++;
        alert("That Is Correct!");
        currentQuestionIndex++;
        generateQuizQuestion();        
    }else if (event !== correct && currentQuestionIndex !== lastQuestionIndex){
        alert("That Is Incorrect.")
        currentQuestionIndex++;
        timeLeft = timeLeft - 10;
        generateQuizQuestion();
    }else{
        showScore();
    }
}

startQuizButton.addEventListener("click",startQuiz);