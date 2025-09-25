
let currentQuestion = 0;

function init() {
    document.getElementById("allQuestions").innerHTML = questions.length;
    document.getElementById("currentQuestion").innerHTML = currentQuestion +1;
    document.getElementById("button").disabled = true;
    showCurrentQuestion();
}

function showCurrentQuestion() {
    let question = questions[currentQuestion];

    document.getElementById("questionText").innerHTML = question["question"];
    document.getElementById("answer_1").innerHTML = question["answer_1"];
    document.getElementById("answer_2").innerHTML = question["answer_2"];
    document.getElementById("answer_3").innerHTML = question["answer_3"];
    document.getElementById("answer_4").innerHTML = question["answer_4"];
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
    
}