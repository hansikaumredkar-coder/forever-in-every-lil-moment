
const openGift = document.getElementById("openGift");
const giftBox = document.getElementById("giftBox");

const subtitle = document.querySelector(".subtitle");
const giftCaption = document.querySelector(".gift-caption");

const memoryOverlay = document.getElementById("memoryOverlay");
const closeMemory = document.getElementById("closeMemory");

openGift.addEventListener("click", function () {

    giftBox.classList.add("opened");

    subtitle.textContent =
        "Happy Birthday, my favorite person! ♡";

    giftCaption.textContent =
        "Every little moment with you is a gift.";

    openGift.textContent = "Open our memories ♡";

    openGift.disabled = false;

    openGift.onclick = function () {
        memoryOverlay.classList.add("show");
    };

});

closeMemory.addEventListener("click", function () {
    memoryOverlay.classList.remove("show");
});


const letterOverlay = document.getElementById("letterOverlay");
const closeLetter = document.getElementById("closeLetter");
const openLetter = document.getElementById("openLetter");

const envelope = document.getElementById("envelope");
const letterContent = document.getElementById("letterContent");

// Open the birthday letter popup
openGift.addEventListener("dblclick", function () {
    letterOverlay.classList.add("show");
});

// Open letter button
openLetter.addEventListener("click", function () {

    envelope.classList.add("opened");

    letterContent.classList.add("show");

    openLetter.textContent = "Your letter is open ♡";

    openLetter.disabled = true;

});

// Close letter popup
closeLetter.addEventListener("click", function () {
    letterOverlay.classList.remove("show");
});
const showLetter = document.getElementById("showLetter");

showLetter.addEventListener("click", function () {
    memoryOverlay.classList.remove("show");
    letterOverlay.classList.add("show");
});

const startQuiz = document.getElementById("startQuiz");
const quizContainer = document.getElementById("quizContainer");
const quizQuestion = document.getElementById("quizQuestion");
const quizOptions = document.getElementById("quizOptions");
const quizFeedback = document.getElementById("quizFeedback");
const nextQuestion = document.getElementById("nextQuestion");
const quizResult = document.getElementById("quizResult");
const quizScore = document.getElementById("quizScore");

const questions = [
    {
        question: "What is our favorite thing to do together?",
        options: ["Watch movies", "Go on little dates", "Talk for hours"],
        answer: 2
    },
    {
        question: "What makes our relationship special?",
        options: ["Our little memories", "Our inside jokes", "Everything about us"],
        answer: 2
    },
    {
        question: "Where is my favorite place to be?",
        options: ["At home", "Beside you", "Anywhere with you"],
        answer: 1
    }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

startQuiz.addEventListener("click", function () {
    quizContainer.classList.add("show");
    showQuestion();
});

function showQuestion() {
    answered = false;

    quizFeedback.textContent = "";
    nextQuestion.style.display = "none";
    quizResult.style.display = "none";
    quizOptions.innerHTML = "";

    const q = questions[currentQuestion];

    quizQuestion.textContent = q.question;

    q.options.forEach(function (option, index) {
        const button = document.createElement("button");

        button.textContent = option;

        button.addEventListener("click", function () {
            if (answered) return;

            answered = true;

            if (index === q.answer) {
                score++;
                button.classList.add("correct");
                quizFeedback.textContent = "Aww, that's right! ♡";
            } else {
                button.classList.add("wrong");
                quizFeedback.textContent = "Every answer is a little memory ♡";
            }

            nextQuestion.style.display = "inline-block";
        });

        quizOptions.appendChild(button);
    });
}

nextQuestion.addEventListener("click", function () {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        quizQuestion.style.display = "none";
        quizOptions.style.display = "none";
        quizFeedback.style.display = "none";
        nextQuestion.style.display = "none";
        quizResult.style.display = "block";

        quizScore.textContent =
            "You got " + score + " out of " + questions.length + "!";
    }
});
