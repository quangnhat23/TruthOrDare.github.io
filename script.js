document.addEventListener('DOMContentLoaded', () => {
    const truthBtn = document.getElementById('truth-btn');
    const dareBtn = document.getElementById('dare-btn');
    const resultDiv = document.getElementById('result');

    const truths = [
        "What is your biggest fear?",
        "What is your most embarrassing moment?",
        "Who do you have a crush on?",
        "Have you ever lied to your best friend?",
        "What is the most childish thing you still do?",
        "At what age did you lose your virginity?",
        "How many people have you slept with",
        "What is the best type of underwear?"
    ];

    const dares = [
        "Do 20 pushups.",
        "Sing a song loudly.",
        "Dance for 1 minute.",
        "Do an impression of someone until someone can guess who you are.",
        "Let the person to your right draw on your face with a pen.",
        "Trade an item of clothing with the player to your right.",
        "Smell the other player's bare feet.",
        "Open your Instagram or Facebook and like each of your ex's posts"
    ];

    truthBtn.addEventListener('click', () => {
        const randomTruth = truths[Math.floor(Math.random() * truths.length)];
        resultDiv.textContent = `Truth: ${randomTruth}`;
    });

    dareBtn.addEventListener('click', () => {
        const randomDare = dares[Math.floor(Math.random() * dares.length)];
        resultDiv.textContent = `Dare: ${randomDare}`;
    });
});