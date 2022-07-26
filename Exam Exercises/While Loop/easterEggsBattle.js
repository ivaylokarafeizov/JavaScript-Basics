function easterEggsBattle(input) {
    let playerFirst = Number(input[0]);
    let playerSecond = Number(input[1]);
    let index = 1;
    let winner = input[index];

    while (winner !== "End") {
        if (winner === "one") {
            playerSecond = playerSecond - 1;
            if (playerSecond === 0) {
                console.log(`Player two is out of eggs. Player one has ${playerFirst} eggs left.`);
                break;
            }
        } else if (winner === "two") {
            playerFirst = playerFirst - 1;
            if (playerFirst === 0) {
                console.log(`Player one is out of eggs. Player two has ${playerSecond} eggs left.`);
                break;
            }
        }
        winner = input.shift();
    }
    if (winner === "End") {
        console.log(`Player one has ${playerFirst} eggs left.`);
        console.log(`Player two has ${playerSecond} eggs left.`);
    }
}

easterEggsBattle(["5",
    "4",
    "one",
    "two",
    "one",
    "two",
    "two",
    "End"
])