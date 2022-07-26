function easterGuests(input) {
    let amountGuests = Number(input[0]);
    let budget = Number(input[1]);

    let easterBreadAmount = Math.ceil(amountGuests / 3);
    let easterEggsAmount = amountGuests * 2;
    let easterBreadPrice = easterBreadAmount * 4;
    let easterEggsPrice = easterEggsAmount * 0.45;
    let total = easterBreadPrice + easterEggsPrice;

    let difference = Math.abs(budget - total);

    if (budget >= total) {
        console.log(`Lyubo bought ${easterBreadAmount} Easter bread and ${easterEggsAmount} eggs.
He has ${difference.toFixed(2)} lv. left.`);
    } else if (total > budget) {
        console.log(`Lyubo doesn't have enough money.
He needs ${difference.toFixed(2)} lv. more.`);
    }
}

easterGuests(["10", "35"]);