 //function for alerting user if they answered correctly or incorrectly

var userRightWrong;

function nextQuestion(event) {

   if (event.target.textContent === questions[i].answer) {
      userRightWrong = "Correct"
   }

   else {
      userRightWrong = "Incorrect"
      seconds -= 10
   }

   document.getElementById("correctAnswer").textContent = userRightWrong
   i++;
   showQuestions();

}
 //print remaining time to score element

//var score = seconds

function printScore() {
  
    if (i === questions.length) {
       document.getElementById("score").textContent = seconds
      clearTimeout(interval);
      console.log(score)
    }
 }
submitButton.addEventListener("click", storeHS);
 function storeHS (){
    event.preventDefault();
    var userInitials = userInitialInput.value;
    var userObject = {userInitials:userInitials, score:seconds }
    console.log(userObject)
 
 
 }
 
 //track score throughout quiz

 //track time throughout quiz

 //add time for incorrect answers

 //add points for correct answers

 //store high scores