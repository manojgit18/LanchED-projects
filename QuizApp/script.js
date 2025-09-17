const questions = [
    {
        question: "What is the capital of India?",
        options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
        answer: "New Delhi"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
        answer: "William Shakespeare"
    },
    {
        question: "What is the largest planet in our Solar System?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Jupiter"
    },
    {
        question: "Which language is used to style web pages?",
        options: ["HTML", "Python", "CSS", "C++"],
        answer: "CSS"
    },
    {
        question: "What is 5 + 7?",
        options: ["10", "11", "12", "13"],
        answer: "12"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-btn');
const scoreContainer = document.getElementById('score-container');
const scoreText = document.getElementById('score-text');
const questionContainer = document.getElementById('question-container');

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => selectOption(option));
        optionsContainer.appendChild(button);
    });

    nextButton.style.display = 'none';
}

function selectOption(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    const buttons = optionsContainer.querySelectorAll('button');

    buttons.forEach(button => {
        button.disabled = true;
        if (button.textContent === currentQuestion.answer) {
            button.style.backgroundColor = '#28a745';
            button.style.color = '#fff';
        }
    });

    if (selectedOption === currentQuestion.answer) {
        score++;
    }

    nextButton.style.display = 'inline-block';
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    questionContainer.style.display = 'none';
    scoreContainer.style.display = 'block';
    scoreText.textContent = `You scored ${score} out of ${questions.length}`;
}

function restartQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    scoreContainer.style.display = 'none';
    questionContainer.style.display = 'block';
    loadQuestion();
}

// Initialize
loadQuestion();
