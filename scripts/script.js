
let currentQuestion = 0;
let correctAnswers = 0;

let AUDIO_SUCCESS = new Audio('sounds/success.mp3');
let AUDIO_FAIL = new Audio('sounds/fail.mp3');

function init() {
    document.getElementById("allQuestions").innerHTML = questions.length;
    showCurrentQuestion();
}

function showCurrentQuestion() {

    if(currentQuestion >= questions.length) {
        //show Endscreen
        document.getElementById("endscreen").style = '';
        document.getElementById("question-body").style = 'display: none';

        document.getElementById("correctAnswers").innerHTML = correctAnswers;
        document.getElementById("amountOfQuestions").innerHTML = questions.length;
        document.getElementById("header-img").src = './img/trophy.jpg';
    } else //show current Question
        {
        let percent = (currentQuestion + 1) / questions.length;
        percent = Math.round(percent * 100);
        //document.getElementById("progressBar").innerHTML = `${percent} %` nur für Prozentanzeige
        document.getElementById("progressBar").style = `width: ${percent}%;`;
        
        let question = questions[currentQuestion];
        document.getElementById("currentQuestion").innerHTML = currentQuestion+1;
        document.getElementById("questionText").innerHTML = question["question"];
        document.getElementById("answer_1").innerHTML = question["answer_1"];
        document.getElementById("answer_2").innerHTML = question["answer_2"];
        document.getElementById("answer_3").innerHTML = question["answer_3"];
        document.getElementById("answer_4").innerHTML = question["answer_4"];
    }
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`
 
    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        AUDIO_SUCCESS.play();
        correctAnswers++;
    }
    else{
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        AUDIO_FAIL.play();
    }
    document.getElementById("button").disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById("button").disabled = true;
    resetAnswerButtons();
    showCurrentQuestion();
}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function restartGame(){
    document.getElementById("header-img").src = './img/schweiz_umriss.png';
    currentQuestion = 0;
    correctAnswers = 0;
    init();
    document.getElementById("endscreen").style = 'display: none'; //endscreen ausblenden
    document.getElementById("question-body").style = '';          // game screen einblenden
}