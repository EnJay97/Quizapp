
let currentQuestion = 0;

function init() {
    document.getElementById("allQuestions").innerHTML = questions.length;
    showCurrentQuestion();
}

function showCurrentQuestion() {

    if(currentQuestion >= questions.length) {
        //show Endscreen
        document.getElementById("endscreen").style = '';
        document.getElementById("question-body").style = 'display: none'
    } else
        {
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
    }
    else{
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
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