function finalCompetition(input) {
    let dancers = Number(input[0]);
    let points = Number(input[1]);
    let season = input[2];
    let place = input[3];

    let wonMoney = 0;
    switch (place) {
        case "Abroad":
            wonMoney = dancers * points * 1.5;
            switch (season) {
                case "summer":
                    wonMoney *= 0.9;
                    break;
                case "winter":
                    wonMoney *= 0.85;
                    break;
            }
            break;
        case "Bulgaria":
            wonMoney = dancers * points;
            switch (season) {
                case "summer":
                    wonMoney *= 0.95;
                    break;
                case "winter":
                    wonMoney *= 0.92;
                    break;
            }
            break;
    }
    let charityMoney = wonMoney * 0.75;
    let moneyLeft = wonMoney - charityMoney;
    let dancersMoney = moneyLeft / dancers;

    console.log(`Charity - ${charityMoney.toFixed(2)}`);
    console.log(`Money per dancer - ${dancersMoney.toFixed(2)}`);
}

finalCompetition(["25",
    "98",
    "winter",
    "Bulgaria"
])