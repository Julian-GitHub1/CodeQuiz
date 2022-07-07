const quizData = [
    {
        question: 'How many countries are in the world?',
        a: '195',
        b: '200',
        c: '150',
        d: '190',
        correct:  "a",
    },
    {
        question: 'What is the fastest land animal?',
        a: 'Elephant',
        b: 'Cheetah',
        c: 'Hawk',
        d: 'Gazelle',
        correct:  "b", 
    },
    {
        question: 'What other country, besides the US, uses the US dollar as its official currency?',
        a: 'Ecuador',
        b: 'Canada',
        c: 'Mexico',
        d: 'Ireland',
        correct:  "a", 
    },
    {
        question: 'The Statue of Liberty was a gift to the United States from which European country?',
        a: 'Germany',
        b: 'Spain',
        c: 'United Kingdom',
        d: 'France',
        correct:  "d", 
    },
    {
        question: 'The human body is made up of approximately how much water?',
        a: '40%',
        b: '50%',
        c: '60%',
        d: '70%',
        correct:  "c", 
    },

];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() 
{
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEls => answerEls.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl =>{
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2> you answered ${score}/${quizData.length} questions correctly</h2>

            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})



// var timerEl = document.getElementById('countdown');


// function countdown() {
//     var timeLeft = 5;
  
//     var timeInterval = setInterval(function () {
    
//       if (timeLeft > 1) {
        
//         timerEl.textContent = timeLeft + ' seconds remaining';
        
//         timeLeft--;
//       } else if (timeLeft === 1) {
       
//         timerEl.textContent = timeLeft + ' second remaining';
//         timeLeft--;
//       } else {
       
//         timerEl.textContent = '';
       
//         clearInterval(timeInterval);
       
//         displayMessage();
//       }
//     }, 1000);
// }