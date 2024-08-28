document.addEventListener('DOMContentLoaded', () => {
    const truthBtn = document.getElementById('truth-btn');
    const dareBtn = document.getElementById('dare-btn');
    const resultDiv = document.getElementById('result');
    const timerDiv = document.getElementById('timer');

    const truths = [
        "What is something you've always wanted to try but haven't yet?",
        "What is your biggest pet peeve?",
        "Have you ever had a secret admirer?",
        "What is the most spontaneous thing you've ever done?",
        "What is one thing you would change about yourself?",
        "What was the last lie you told?",
        "If you could live anywhere in the world, where would it be?",
        "What is the most embarrassing thing you've done in front of someone you like?",
        "What is a talent you have that most people don't know about?",
        "What was your first impression of the person to your left?"
    ];


    const dares = [
        "Do 15 pushups.",
        "Sing the chorus of a popular song in a funny voice.",
        "Do a silly dance for 30 seconds.",
        "Speak in an accent until your next turn.",
        "Let someone in the group redo your hairstyle.",
        "Do a dramatic reading of a random text message from your phone.",
        "Eat a spoonful of a condiment of the group’s choosing.",
        "Try to lick your elbow.",
        "Act out a scene from your favorite movie.",
        "Give the person to your right a sincere compliment.", "Call your parent and say I love you"
    ];


    let countdown;
    const timeLimit = 120; // 2 minutes in seconds

    truthBtn.addEventListener('click', () => {
        startTimer(timeLimit);
        const randomTruth = truths[Math.floor(Math.random() * truths.length)];
        resultDiv.textContent = `Truth: ${randomTruth}`;
    });

    dareBtn.addEventListener('click', () => {
        startTimer(timeLimit);
        const randomDare = dares[Math.floor(Math.random() * dares.length)];
        resultDiv.textContent = `Dare: ${randomDare}`;
    });

    function startTimer(duration) {
        clearInterval(countdown);
        let timeRemaining = duration;
        countdown = setInterval(() => {
            const minutes = Math.floor(timeRemaining / 60);
            const seconds = timeRemaining % 60;
            timerDiv.textContent = `Time left: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            if (timeRemaining <= 0) {
                clearInterval(countdown);
                resultDiv.textContent = "Time's up! Next player's turn.";
            }
            timeRemaining--;
        }, 1000);
    }
});