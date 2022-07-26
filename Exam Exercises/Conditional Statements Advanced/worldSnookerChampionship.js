function worldSnookerChampionship(input) {
    let champStage = input[0];
    let ticketType = input[1];
    let numberTicket = Number(input[2]);
    let trophyPic = input[3];

    let ticketPrice = 0;

    switch (champStage) {
        case `Quarter final`:
            switch (ticketType) {
                case `Standard`:
                    ticketPrice = 55.5;
                    break;
                case `Premium`:
                    ticketPrice = 105.20;
                    break;
                case `VIP`:
                    ticketPrice = 118.90;
                    break;
            }
            break;
        case `Semi final`:
            switch (ticketType) {
                case `Standard`:
                    ticketPrice = 75.88;
                    break;
                case `Premium`:
                    ticketPrice = 125.22;
                    break;
                case `VIP`:
                    ticketPrice = 300.40;
                    break;
            }
            break;
        case `Final`:
            switch (ticketType) {
                case `Standard`:
                    ticketPrice = 110.10;
                    break;
                case `Premium`:
                    ticketPrice = 160.66;
                    break;
                case `VIP`:
                    ticketPrice = 400;
                    break;
            }
            break;
    }
    let sum = ticketPrice * numberTicket;
    if (sum > 4000) {
        sum *= 0.75;
    } else if (sum > 2500 && sum <= 4000) {
        sum *= 0.90;
        if (trophyPic === `Y`) {
            sum += (numberTicket * 40);
        }
    } else {
        if (trophyPic === `Y`) {
            sum += (numberTicket * 40);
        }
    }
    console.log((sum).toFixed(2));
}

worldSnookerChampionship(["Final", "Premium", "25", "Y"]);