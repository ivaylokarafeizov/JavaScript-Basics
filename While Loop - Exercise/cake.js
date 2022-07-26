function cake(input) {
    let l = Number(input[0]);
    let w = Number(input[1]);

    let piece = w * l;
    let index = 2;
    let inputElement = input[index];

    while (inputElement !== 'STOP') {
        let numberOfPieces = Number(inputElement);
        piece -= numberOfPieces;

        if (piece < 0) {
            console.log(`No more cake left! You need ${Math.abs(piece)} pieces more.`);
            break;
        }
        index++;
        inputElement = input[index];
    }
    if (piece >= 0) {
        console.log(`${piece} pieces are left.`);
    }
}

cake(["10",
    "2",
    "2",
    "4",
    "6",
    "STOP"
]);