document.addEventListener('DOMContentLoaded', () => {
    const truthBtn = document.getElementById('truth-btn');
    const dareBtn = document.getElementById('dare-btn');
    const resultDiv = document.getElementById('result');
    const timerDiv = document.getElementById('timer');

    const truths = [
        "What is your biggest fear?",
        "What is your most embarrassing moment?",
        "Who do you have a crush on?",
        "Have you ever lied to your best friend?",
        "What is the most childish thing you still do?",
        "At what age did you lose your virginity?",
        "How many people have you slept with",
        "What is the best type of underwear?",
        "What is the weirdest trend you've ever participated in?",
        "What is that one thing you felt guilty of yourself?"
    ];

    const dares = [
        "Do 20 pushups.",
        "Sing a song loudly.",
        "Dance for 1 minute.",
        "Do an impression of someone until someone can guess who you are.",
        "Let the person to your right draw on your face with a pen.",
        "Trade an item of clothing with the player to your right.",
        "Smell the other player's bare feet.",
        "Open your Instagram or Facebook and like each of your ex's posts",
        "Call your parent and say I love you"
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