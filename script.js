const questions = [
  {
    question: "What does 'bid' stand for?",
    options: ["Twice a day", "Before meals", "As needed", "At bedtime"],
    answer: "Twice a day"
  },
  {
    question: "What is the brand name for acetaminophen?",
    options: ["Advil", "Tylenol", "Aleve", "Motrin"],
    answer: "Tylenol"
  },
  {
    question: "What does 'DEA' stand for?",
    options: ["Drug Enforcement Administration", "Department of Energy Affairs", "Drug Education Agency", "Dispensing Efficiency Association"],
    answer: "Drug Enforcement Administration"
  },
  {
    question: "What is the maximum daily dose of ibuprofen for an adult?",
    options: ["2400 mg", "3200 mg", "4000 mg", "1600 mg"],
    answer: "3200 mg"
  },
  {
    question: "What does 'prn' mean?",
    options: ["After meals", "As needed", "Before meals", "Every day"],
    answer: "As needed"
  }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-button");
const scoreElement = document.getElementById("score");

function showQuestion() {
  const question = questions[currentQuestionIndex];
  questionElement.textContent = question.question;
  optionsElement.innerHTML = "";
  question.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () => checkAnswer(option));
    optionsElement.appendChild(button);
  });
}

function checkAnswer(selectedOption) {
  const question = questions[currentQuestionIndex];
  if (selectedOption === question.answer) {
    score++;
    scoreElement.textContent = `Score: ${score}`;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    alert(`Game Over! Your final score is ${score}/${questions.length}`);
    currentQuestionIndex = 0;
    score = 0;
    scoreElement.textContent = `Score: ${score}`;
    showQuestion();
  }
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    alert(`Game Over! Your final score is ${score}/${questions.length}`);
    currentQuestionIndex = 0;
    score = 0;
    scoreElement.textContent = `Score: ${score}`;
    showQuestion();
  }
});

showQuestion();
