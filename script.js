var answers = {};

var question_one = document.getElementById('question-1');
var question_two = document.getElementById('question-2');
var question_three = document.getElementById('question-3');
var question_four = document.getElementById('question-4');
var question_five = document.getElementById('question-5');

function storageAnswer(question_number, event){
    if(event.target.type === 'radio'){
        console.log(event.target.value);
        answers['question'+question_number] = parseInt(event.target.value);
        console.log(answers);
    }
}

question_one.addEventListener('click', function(event){
    storageAnswer(1, event)
})
question_two.addEventListener('click', function(event){
    storageAnswer(2, event)
})
question_three.addEventListener('click', function(event){
    storageAnswer(3, event)
})
question_four.addEventListener('click', function(event){
    storageAnswer(4, event)
})
question_five.addEventListener('click', function(event){
    storageAnswer(5, event)
})

function totalScore(){
    var total_score = 100;
    answers.question1+
    answers.question2+
    answers.question3+
    answers.question4+
    answers.question5;
    
    return total_score;
}

function getInfoBasedOnScore(){
    if(totalScore() < 7){
        var score_info = "Você é 100! 100% nossa cara!"
    }else if(totalScore() > 7){
        var score_info = "Você é 100! 100% nossa cara!"
    }
    return score_info;
}

var subimit1 = document.getElementById('submit1');
var subimit2 = document.getElementById('submit2');
var subimit3 = document.getElementById('submit3');
var subimit4 = document.getElementById('submit4');
var subimit5 = document.getElementById('submit5');

function nextQuestion(question_number){
    var current_quest_number = question_number - 1;
    var question_number = question_number.toString();
    var current_question_number = current_quest_number.toString();

    var el = document.getElementById('question-'+question_number);
    var el2 = document.getElementById('question-'+current_quest_number);

    el.style.display = "block";
    el2.style.display = "none";
}

subimit1.addEventListener('click', function(){
    nextQuestion(2);
    growProgressBar('40%');
})
subimit2.addEventListener('click', function(){
    nextQuestion(3);
    growProgressBar('60%');
})
subimit3.addEventListener('click', function(){
    nextQuestion(4);
    growProgressBar('80%');
})
subimit4.addEventListener('click', function(){
    nextQuestion(5);
    growProgressBar('100%');
})
subimit5.addEventListener('click', function(){
    nextQuestion(6);
})

subimit5.addEventListener('click', function(){
    document.getElementById('printtotalscore').innerHTML = totalScore();
    document.getElementById('printscoreinfo').innerHTML = getInfoBasedOnScore();

})

function growProgressBar(percentage_width){
    var bar = document.getElementById('progress_bar');
    bar.style.width = percentage_width;
}