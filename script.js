const exploreBtn = document.querySelector('.main-content .explore-btn');
if (exploreBtn) {
    exploreBtn.addEventListener('click', () => {
        // This function can redirect to the quiz page
        window.location.href = 'quiz.html';
    });
}

// Quiz Functionality
const correctAnswers = {
    q1: 'a1', // Greenhouse gas emissions
    q2: 'a2'  // Reducing meat consumption
};


const submitButton = document.querySelector('.submit-btn');
const scoreDisplay = document.getElementById('score');
const correctAnswersDisplay = document.getElementById('correct-answers');

if (submitButton) {
    submitButton.addEventListener('click', () => {
        let score = 0;
        let results = [];

        for (let question in correctAnswers) {
            const selected = document.querySelector(`input[name="${question}"]:checked`);
            if (selected) {
                const isCorrect = selected.value === correctAnswers[question];
                results.push(`${question}: ${isCorrect ? 'Correct' : 'Wrong'}`);
                if (isCorrect) {
                    score++;
                }
            } else {
                results.push(`${question}: No answer`);
            }
        }

        // Display results
        scoreDisplay.textContent = score;
        correctAnswersDisplay.textContent = results.join(', ');
    });
}
