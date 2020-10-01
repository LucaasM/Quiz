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


const btnSubmit = document.getElementById('submit')

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