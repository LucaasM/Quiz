// Questões do quiz

const quizData = [  
    {
        question: 'Qual maior campeão brasileiro ?',
        a: 'São Paulo',
        b: 'Gremio',
        c: 'Palmeiras',
        d: 'Flamengo',
        correct: 'c'
    },

    {
        question: 'Qual ultimo campeão brasileiro?',
        a: 'Palmeiras',
        b: 'Flamengo',
        c: 'Santos',
        d: 'Gremio',
        correct: 'b'
    },

    {
        question: 'Qual maior campeão da libertadores ?',
        a: 'Independiente',
        b: 'Boca Juniors',
        c: 'São Paulo',
        d: 'Penarol',
        correct: 'a'
    },

    {
        question: 'Ultimo vice campeão da libertadores ?',
        a: 'River Plate',
        b: 'Gremio',
        c: 'Flamengo',
        d: 'Palmeiras',
        correct: 'a'
    },

    {
        question: 'Atual campeão da copa do brasil ?',
        a: 'Athletico',
        b: 'Plameiras',
        c: 'Gremio',
        d: 'Internacional',
        correct: 'a'
    }

]

const quiz = document.getElementById('quiz')
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const answerEl = document.querySelectorAll('.answer');



const btnNewQuestion = document.getElementById('newQuestion');
const btnSubmit = document.getElementById('submit');


let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswer();

    const currentQuizData = quizData[currentQuiz];
    
    questionEl.innerHTML = currentQuizData.question;

    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d

}

function getSelected() {
  

    let answer = undefined;

    answerEl.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    })
    
    return answer;
}

function deselectAnswer(){
    answerEl.forEach((answerEl) => {
        answerEl.checked = false;
    }) 
}

function nextQuestion () {
    currentQuiz++;
    
    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        quiz.innerHTML = `<h2>
        Você acertou ${score}/5 questões</h2>`
    }

}


btnSubmit.addEventListener('click', () => {
    const answer = getSelected();
   
    if (answer) {
        if (answer === quizData[currentQuiz].correct){
            score++;
           
            nextQuestion();
           
        } else {
            nextQuestion();
        }
    
    }
});

btnNewQuestion.addEventListener('click', function(){
    quiz.innerHTML = `

    <div class="quiz-header" >
            <h2 id="question">Nova questão</h2>
        <div class="newQuestion">
            
            <label for="title">Título da questão</label>
            <input type="text" id="title" >
            

            <label for="a_new">Alternativa - A</label>
            <input type="text" id="a_new" >

            <label for="b_new">Alternativa - B</label>
            <input type="text" id="b_new" >


            <label for="c_new">Alternativa - C</label>
            <input type="text" id="c_new" >

            <label for="d_new">Alternativa - D</label>
            <input type="text" id="d_new" >


            <label for="correct_new">Alternativa correta</label>
            <input type="text" id="correct_new" >
            

    
        </div>

    </div>

<div class="botoes">
       
    <button type="submit" id="createQuestion">Criar nova questão </button>
    <button type="submit" id="createQuestion"><a href= "../index.html">Ir para o Quiz</a></button>


</div>
 
    `

    const btnCreateQuestion = document.getElementById('createQuestion');
    const titleEl = document.getElementById('title');
    const altAEl = document.getElementById('a_new');
    const altBEl = document.getElementById('b_new');
    const altCEl = document.getElementById('c_new');
    const altDEl = document.getElementById('d_new');
    const altCorrectEl = document.getElementById('correct_new')



    btnCreateQuestion.addEventListener('click', function(){
  
  
        const title = titleEl.value;
        const altA = altAEl.value;
        const altB = altBEl.value;
        const altC = altCEl.value;
        const altD = altDEl.value;
        const altCorrect = altCorrectEl.value;
       
        quizData[quizData.length] = {
            question: title,
            a: altA,
            b: altB,
            c: altC,
            d: altD,
            correct: altCorrect
        }



        titleEl.value = "";
        altAEl.value = "";
        altBEl.value = ""
        altCEl.value = "";
        altDEl.value = "";
        altCorrectEl.value = "";

       
      
 
       
    })
})
