function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermans = Number(input[2]);

    let total = 0;

    switch (season) {
        case "Spring":
            total = 3000;
            break;
        case "Summer":
        case "Autumn":
            total = 4200;
            break;
        case "Winter":
            total = 2600;
            break;
    }

    if (fishermans <= 6) {
        total = total * 0.90;
    } else if (fishermans > 7 && fishermans <= 11) {
        total = total * 0.85;
    } else if (fishermans > 12) {
        total = total * 0.75;
    }

    if (fishermans % 2 == 0 && season != "Autumn") {
        total = total * 0.95;
    }

    if (total > budget) {
        console.log(`Not enough money! You need ${(total - budget).toFixed(2)} leva.`);
    } else if (total <= budget) {
        console.log(`Yes! You have ${(budget - total).toFixed(2)} leva left.`);
    }
}

fishingBoat(["2000", "Winter", "13"]);