// Questões do quiz

const quizData = [  
    {
        question: 'How old is Florin ?',
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct: 'c'
    },

    {
        question: 'What is the most used programing language in 2019 ?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'Javascript',
        correct: 'd'
    },

    {
        question: 'Who is the President of US ?',
        a: 'Florin Pop',
        b: 'Donald Trump',
        c: 'Ivan Saldano',
        d: 'Mihai Andrei',
        correct: 'b'
    },

    {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Jason Object Notation',
        d: 'Helicopters Terminals Motorboats Lamborginis',
        correct: 'a'
    },

    {
        question: 'What year was Javascript launched ?',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'none of the above',
        correct: 'd'
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
        You answered correctly at ${score}/5 question</h2>`
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