function gameNumberWars(input) {
    let playerOne = input.shift();
    let playerTwo = input.shift(); 
    let command = input.shift(); 
    let pointsPlayerOne = 0;
    let pointsPlayerTwo = 0;

    while (command !== "End of game") {
        let cardPlayerOne = +command;
        let cardPlayerTwo = +input.shift();

        if (cardPlayerOne > cardPlayerTwo) {
            pointsPlayerOne += cardPlayerOne - cardPlayerTwo;
        } else if (cardPlayerOne < cardPlayerTwo) {
            pointsPlayerTwo += cardPlayerTwo - cardPlayerOne;
        } else {
            console.log(`Number wars!`); 
            cardPlayerOne = +input.shift();
            cardPlayerTwo = +input.shift();

            if (cardPlayerOne > cardPlayerTwo) {
                console.log(`${playerOne} is winner with ${pointsPlayerOne} points`);
                break;
            } else if (cardPlayerOne < cardPlayerTwo) {
                console.log(`${playerTwo} is winner with ${pointsPlayerTwo} points`);
                break;
            }
        } 
        command = input.shift();
    } 
    if (command === 'End of game') {
        console.log(`${playerOne} has ${pointsPlayerOne} points`);
        console.log(`${playerTwo} has ${pointsPlayerTwo} points`);
    }
}

gameNumberWars(["Desi",
"Niki",
"7",
"5",
"3",
"4",
"3",
"3",
"5",
"3"])
