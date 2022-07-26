function pcGameShop(input) {
    let n = Number(input.shift());

    let hearthstoneCount = 0;
    let forniteCount = 0;
    let overwatchCount = 0;
    let otherGamesCount = 0;

    for (let i = 0; i < n; i++) {
        let game = input.shift();
        switch (game) {
            case "Hearthstone":
                hearthstoneCount++;
                break;
            case "Fornite":
                forniteCount++;
                break;
            case "Overwatch":
                overwatchCount++;
                break;
            default:
                otherGamesCount++;
                break;
        }
    }

    console.log(`Hearthstone - ${(hearthstoneCount * 1.0 / n * 100).toFixed(2)}%`);
    console.log(`Fornite - ${(forniteCount * 1.0 / n * 100).toFixed(2)}%`);
    console.log(`Overwatch - ${(overwatchCount * 1.0 / n * 100).toFixed(2)}%`);
    console.log(`Others - ${(otherGamesCount * 1.0 / n * 100).toFixed(2)}%`);
}

pcGameShop(["4",
    "Hearthstone",
    "Fornite",
    "Overwatch",
    "Counter-Strike"
])