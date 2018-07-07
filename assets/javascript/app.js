// You'll create a trivia form with multiple choice or true/false options (your choice).
// The player will have a limited amount of time (60 sec) to finish the quiz.
// The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.
// Don't let the player pick more than one answer per question.
// Don't forget to include a countdown timer.

// Part One: Match the question to the annswer to see if user answer correctly.
function onSubmit() {
    var score=0;
    var numberOfQuestions = 10;
    var ansArr = ["Snow White and the Seven Dwarf",
                "Prince Philip",
                "Midnight",
                "Six",
                "Alice",
                "Mr. Smee",
                "Hawaii",
                "Russell",
                "The Jungle Book",
                "True" ];

    var correct = 0, incorrect = 0, unanswered = 0;

    for(var i =1; i <=numberOfQuestions; i++) {
        var answered = document.forms["quiz"]["mc" + i].value;
        if(!answered) {
            unanswered += 1;
            }
            else if(answered === ansArr[i-1]) {
            correct += 1;
            } else {
            incorrect += 1;
            }
    }

    var result = document.getElementById("result");
    result.innerHTML= "<p> All Done! </p><p>Correct Answers: " + correct +"</p><p>Incorrect Answers: "+ incorrect + "</p><p>Unanswered: "+ unanswered + "</p>";
            
}

//Part II: Create a CountDown Timer
var number = 30;

//  Variable that will hold our interval ID when we execute
//  the "run" function
var intervalId;

//  When the submit button gets clicked, run the stop function.
$("#submit").on("click", stop);

//  When the Start button gets clicked, execute the run function.
$("#Start").on("click", run);

//  The run function sets an interval
//  that runs the decrement function once a second.
//  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
function run() {
    $("#Start").hide();
    $("#quiz").show();
    clearInterval(intervalId);
    decrement();
    intervalId = setInterval(decrement, 1000);
}

//  The decrement function.
function decrement() {
    //  Decrease number by one.
    number--;
    //  Show the number in the #show-number tag.
    $("#show-number").html("<h2> Time Remaining: " + number + " Seconds</h2>");

  //  Once number hits zero...
  if (number === 0) {
    //  ...run the stop function.
    stop();
    //  Alert the user that time is up.
    // alert("Time Up!");
  }
}

//  The stop function
function stop() {
  //  Clears our intervalId
  //  We just pass the name of the interval
  //  to the clearInterval function.
  clearInterval(intervalId);
  $("#quiz").hide();
  onSubmit();
}

