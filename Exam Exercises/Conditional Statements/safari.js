function safari(input) {
    let budget = Number(input[0]);
    let fuel = Number(input[1]);
    let day = input[2];

    let fuelPrice = fuel * 2.10;
    let addGuide = fuelPrice + 100;

    let price;

    if (day === "Saturday") {
        price = addGuide * 0.9;
    } else if (day === "Sunday") {
        price = addGuide * 0.8;
    }

    let moneyLeft = Math.abs(budget - price);
    if (budget >= price) {
        console.log(`Safari time! Money left: ${moneyLeft.toFixed(2)} lv.`);
    } else if (budget < price) {
        console.log(`Not enough money! Money needed: ${moneyLeft.toFixed(2)} lv.`);
    }
}

safari(["105.20", "15", "Sunday"]);