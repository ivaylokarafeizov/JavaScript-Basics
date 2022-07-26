function toyShop(input) {
    let tripPrice = Number(input[0]);
    let puzzlesCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let bearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);

    let diff = 0;

    let sum = puzzlesCount * 2.60 + dollsCount * 3 + bearsCount * 4.10 + minionsCount * 8.20 + trucksCount * 2;
    let toyCount = puzzlesCount + dollsCount + bearsCount + minionsCount + trucksCount;

    if (toyCount >= 50) {
        diff = sum * 0.25;
    }

    let total = sum - diff;
    let rent = total * 0.1;
    let profit = total - rent;
    let moneyLeft = profit - tripPrice;
    let moneyNeeded = tripPrice - profit;

    if (profit >= tripPrice) {
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
    }
}

toyShop(["40.8", "20", "25", "30", "50", "10"]);