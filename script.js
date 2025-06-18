
function init() {
    renderCards();

};

init();

// Karten rendern

function renderCards(){
    let contentRef = document.getElementById("content");
    contentRef.innerHTML = "";

    for (let i = 0; i < questions.length; i++) {
        contentRef.innerHTML += `<img src="./img/matterhorn.jpg" class="card-img-top">
                                    <div class="card-body">
                                    <h5 class="card-title">${questions[i].question}</h5>

                                    <div class="card mb-2">
                                        <div class="card-body">
                                            <p>${questions[i].answer_1}</p>
                                        </div>
                                    </div>

                                    <div class="card mb-2">
                                        <div class="card-body">
                                            <p>${questions[i].answer_2}</p>
                                        </div>
                                    </div>

                                    <div class="card mb-2">
                                        <div class="card-body">
                                            <p>${questions[i].answer_3}</p>
                                        </div>
                                    </div>

                                    <div class="card mb-2">
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
