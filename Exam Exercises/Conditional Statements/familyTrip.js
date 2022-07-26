function familyTrip(input) {
    let budget = Number(input[0]);
    let countNightSleep = Number(input[1]);
    let priceForNight = Number(input[2]);
    let discountInProcents = Number(input[3]);


    if (countNightSleep > 7) {
        priceForNight = priceForNight * 0.95;
    }

    let priceVacantion = priceForNight * countNightSleep;
    let sumAfterDiscount = (discountInProcents / 100.0) * budget;

    let priceTotal = sumAfterDiscount + priceVacantion;

    if (budget >= priceTotal) {
        let leftMoney = budget - priceTotal;
        console.log(`Ivanovi will be left with ${leftMoney.toFixed(2)} leva after vacation.`);
    } else {
        let deff = priceTotal - budget;
        console.log(`${deff.toFixed(2)} leva needed.`);
    }
}

familyTrip(["500", "7", "66", "15"]);