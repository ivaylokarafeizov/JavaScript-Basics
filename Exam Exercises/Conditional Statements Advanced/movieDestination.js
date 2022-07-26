function movieDestination(input) {
    let budget = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let days = Number(input[3]);

    let total = 0;

    switch (season) {
        case "Winter":
            if (destination === "Dubai") {
                total = days * 45000;
            } else if (destination === "Sofia") {
                total = days * 17000;
            } else if (destination === "London") {
                total = days * 24000;
            }
            break;
        case "Summer":
            if (destination === "Dubai") {
                total = days * 40000;
            } else if (destination === "Sofia") {
                total = days * 12500;
            } else if (destination === "London") {
                total = days * 20250;
            }
            break;
    }

    if (destination === "Sofia") {
        total = total + (total * 0.25);
    } else if (destination === "Dubai") {
        total = total * 0.70;
    }

    if (total >= budget) {
        console.log(`The director needs ${(total - budget).toFixed(2)} leva more!`);
    } else if (total <= budget) {
        console.log(`The budget for the movie is enough! We have ${(budget - total).toFixed(2)} leva left!`);
    }
}

movieDestination(["1000000", "Dubai", "Summer", "5"]);