
let currentQuestion = 0;
function init() {
    document.getElementById("allQuestions").innerHTML = questions.length;
    showCurrentQuestion();
}

function showCurrentQuestion() {
    let question = questions[currentQuestion];

    document.getElementById("questionText").innerHTML = question["question"];
}