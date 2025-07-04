
function init() {
    renderCard();
}

// aktuelle Karte rendern

let currentQuestion = 0;

function renderCard(){
    let contentRef = document.getElementById("content");
    contentRef.innerHTML = "";

    if (currentQuestion >= questions.length) {
        contentRef.innerHTML = "<h2>Quiz beendet</h2>";
        return; // bricht die Funktion am Ende des Spiels ab
    }

    let q = questions[currentQuestion];

    contentRef.innerHTML = `<img src="${images[currentQuestion].src}" class="card-img-top">
                                    <div class="card-body">
                                    <h5 class="card-title">${q.question}</h5>

                                    <div class="card style_answer_card mb-2" onclick="answer('answer_1')">
                                        <div class="card-body" id="answer_1">
                                            <p>${q.answer_1}</p>
                                        </div>
                                    </div>

                                    <div class="card style_answer_card mb-2" onclick="answer('answer_2')">
                                        <div class="card-body" id="answer_2">
                                            <p>${q.answer_2}</p>
                                        </div>
                                    </div>

                                    <div class="card style_answer_card mb-2" onclick="answer('answer_3')">
                                        <div class="card-body" id="answer_3">
                                            <p>${q.answer_3}</p>
                                        </div>
                                    </div>

                                    <div class="card style_answer_card mb-2" onclick="answer('answer_4')">
                                        <div class="card-body" id="answer_4">
                                            <p>${q.answer_4}</p>
                                        </div>
                                    </div>

                                    <div class="question-footer">
                                        <div>
                                            <b>${currentQuestion+1}</b> von <b>${questions.length}</b> Fragen
                                        </div>
                                        <div>
                                            <button id="next-button" class="disabled" onclick ="nextQuestion()">nächste Frage</button>
                                        </div>
                                    </div>`
}

function answer(selection){
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;
    
    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).classList.add('right_answer');
    } else{
        document.getElementById(selection).classList.add('wrong_answer');
        document.getElementById(idOfRightAnswer).classList.add('right_answer');
    }  
    
    document.getElementById('next-button').classList.remove('disabled');
    
    //openExplaination();
}

/*function openExplaination(){
    // bei click auf Antwort, Overlay öffnen
    document.getElementById('overlay').classList.remove('d_none')
    // h3 richtige Antwort, p kurze Erklärung einblenden
}*/

function nextQuestion(){
    currentQuestion++;
    renderCard();
}