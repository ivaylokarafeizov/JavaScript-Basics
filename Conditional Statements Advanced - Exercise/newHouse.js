function newHouse(input) {
    let flowersType = input[0];
    let flowersCount = Number(input[1]);
    let budget = Number(input[2]);

    let total = 0;

    switch (flowersType) {
        case "Roses":
            total = flowersCount * 5;
            if (flowersCount > 80) {
                total = total * 0.9;
            }
            break;
        case "Dahlias":
            total = flowersCount * 3.8;
            if (flowersCount > 90) {
                total = total * 0.85;
            }
            break;
        case "Tulips":
            total = flowersCount * 2.8;
            if (flowersCount > 80) {
                total = total * 0.85;
            }
            break;
        case "Narcissus":
            total = flowersCount * 3;
            if (flowersCount < 120) {
                total = flowersCount * (3 + 0.45);
            }
            break;
        case "Gladiolus":
            total = flowersCount * 2.5;
            if (flowersCount < 80) {
                total = flowersCount * (2.5 + 0.5);
            }
            break;
    }
    if (budget >= total) {
        console.log(`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${(budget - total).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(total - budget).toFixed(2)} leva more.`);
    }
}

newHouse(["Roses", "55", "250"]);