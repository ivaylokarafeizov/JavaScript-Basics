function nameGame(input) {
    let name = input.shift();
    let symbol = 0;
    let maxScore = Number.MIN_SAFE_INTEGER;
    let winnerName = "";

    while (name !== "Stop") {
        let currentScore = 0;

        for (let i = 0; i <= name.length - 1; i++) {
            symbol = name.charCodeAt(i);
            let n = Number(input.shift());
            if (n === symbol) {
                currentScore += 10;
            } else {
                currentScore += 2;
            }
            if (currentScore >= maxScore) {
                maxScore = currentScore;
                winnerName = name;
            }
        }
        name = input.shift();
    }
    console.log(`The winner is ${winnerName} with ${maxScore} points!`);
}

nameGame(["Ivan",
    "73",
    "20",
    "98",
    "110",
    "Ivo",
    "80",
    "65",
    "87",
    "Stop"
])