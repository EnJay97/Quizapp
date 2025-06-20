
function init() {
    renderCards();

};

init();

// Karten rendern

let currentQuestion = 0;

function renderCards(){
    let contentRef = document.getElementById("content");
    contentRef.innerHTML = "";

    for (let i = 0; i < questions.length; i++) {
        contentRef.innerHTML += `<img src="${images[i].src}" class="card-img-top">
                                    <div class="card-body">
                                    <h5 class="card-title">${questions[i].question}</h5>

                                    <div class="card style_answer_card mb-2 onclick="answer('answer_1')"">
                                        <div class="card-body">
                                            <p>${questions[i].answer_1}</p>
                                        </div>
                                    </div>

                                    <div class="card style_answer_card mb-2 onclick=answer"('answer_2')"">
                                        <div class="card-body">
                                            <p>${questions[i].answer_2}</p>
                                        </div>
                                    </div>

                                    <div class="card style_answer_card mb-2 onclick=answer"('answer_3')"">
                                        <div class="card-body">
                                            <p>${questions[i].answer_3}</p>
                                        </div>
                                    </div>

                                    <div class="card style_answer_card mb-2 onclick=answer"('answer_4')"">
                                        <div class="card-body">
                                            <p>${questions[i].answer_4}</p>
                                        </div>
                                    </div>

                                    <div class="question-footer">
                                        <div>
                                            <b>${i+1}</b> von <b>${questions.length}</b> Fragen
                                        </div>
                                        <div>
                                            <button>nächste Frage</button>
                                        </div>
                                    </div>`
}
};

function answer(selection){
    console.log(selection);
    
};