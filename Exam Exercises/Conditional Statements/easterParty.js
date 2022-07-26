function easterParty(input) {
    let amountGuests = Number(input[0]);
    let priceDish = Number(input[1]);
    let budget = Number(input[2]);

    if (amountGuests >= 10 && amountGuests <= 15) {
        priceDish *= 0.85;
    } else if (amountGuests > 15 && amountGuests <= 20) {
        priceDish *= 0.8;
    } else if (amountGuests > 20) {
        priceDish *= 0.75;
    }

    let priceCake = budget * 0.1;
    let totalMoney = (amountGuests * priceDish) + priceCake;
    let difference = Math.abs(budget - totalMoney);

    if (budget >= totalMoney) {
        console.log(`It is party time! ${difference.toFixed(2)} leva left.`);
    } else if (totalMoney > budget) {
        console.log(`No party! ${difference.toFixed(2)} leva needed.`);
    }
}

easterParty(["8", "25", "340"]);