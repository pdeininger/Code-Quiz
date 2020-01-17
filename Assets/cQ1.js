
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
 
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
function Question(text, choices, answer, showScores) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
    //updated
    this.showScores = showScores;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}

function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        showProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};
 
function getElementById() {
    var id = JSON.parse(localStorage.getItem(scores));
}
// create questions here
var questions = [new Question("Who was originally cast as the Tin Man?", ["Don Ameche", "Buddy Ebsen","Mel Blanc", "Fred MacMurray"], "Buddy Ebsen"),
    new Question("Which of these is Judy Garland's daughter?", ["Bette Midler", "Hayley Mills", "Liza Minnelli", "Susan Sarandon"], "Liza Minnelli"),
    new Question("How many characters did Frank Morgan play?", ["5", "1","None", "3"], "5"),
    new Question("What is the name of Dorothy's dog?", ["Benji", "Lassie", "Bud", "Toto"], "Toto"),
    new Question("What role did Billie Burke play?", ["Glinda the Good Witch", "The Wizard", "Uncle Henry", "Miss Gulch"], "Glinda the Good Witch"),
    new Question("What is the name of Dorothy's aunt", ["Auntie Em", "Aunt Sue", "Auntie", "Aunt Caroline"], "Auntie Em")
];

var seconds = document.getElementById("countdown").textContent;
var countdown = setInterval(function(){
    seconds--;
    (seconds == 1) ? document.getElementById("plural").textContent = "" : document.getElementById("plural").textContent = "s";
    document.getElementById("countdown").textContent = seconds;
    if (seconds <= 0) clearInterval(countdown);
},1000);

// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();