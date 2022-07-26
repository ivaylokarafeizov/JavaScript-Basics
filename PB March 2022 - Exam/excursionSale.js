function excursionSale(input) {
    let index = 0;
    let seaExcursionsAmount = Number(input[index]);
    let mountainExcursionsAmount = Number(input[index]);
    let profit = 0;
    let seaPrice = 680;
    let mountainPrice = 499;
    let destination = input[index];

    while (destination !== "Stop") {
        destination = input[index];
        index++;
        if (destination === 'Stop' || (seaExcursionsAmount === 0 && mountainExcursionsAmount === 0)) {
            break;
        }
        if (destination === 'sea' && seaExcursionsAmount > 0) {
            profit += seaPrice;
            seaExcursionsAmount--;
        } else if (destination === 'mountain' && mountainExcursionsAmount > 0) {
            profit += mountainPrice;
            mountainExcursionsAmount--;
        }
    }
    if (seaExcursionsAmount === 0 && mountainExcursionsAmount === 0) {
        console.log('Good job! Everything is sold.');
    }
    console.log(`Profit: ${profit} leva.`);
}

excursionSale(["2",
    "2",
    "sea",
    "mountain",
    "sea",
    "sea",
    "mountain"
])