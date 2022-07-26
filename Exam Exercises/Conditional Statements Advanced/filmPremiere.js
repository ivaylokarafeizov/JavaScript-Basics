function filmPremiere(input) {
    let movie = input[0];
    let pack = input[1];
    let tickets = Number(input[2]);

    let total = 0;

    switch (movie) {
        case "John Wick":
            if (pack === "Drink") {
                total = tickets * 12;
            } else if (pack === "Popcorn") {
                total = tickets * 15;
            } else if (pack === "Menu") {
                total = tickets * 19;
            }
            break;
        case "Star Wars":
            if (pack === "Drink") {
                total = tickets * 18;
            } else if (pack === "Popcorn") {
                total = tickets * 25;
            } else if (pack === "Menu") {
                total = tickets * 30;
            }
            break;
        case "Jumanji":
            if (pack === "Drink") {
                total = tickets * 9;
            } else if (pack === "Popcorn") {
                total = tickets * 11;
            } else if (pack === "Menu") {
                total = tickets * 14;
            }
            break;
    }

    if (movie === "Star Wars" && tickets >= 4) {
        total = total * 0.7;     
    } else if (movie === "Jumanji" && tickets == 2) {
        total = total * 0.85;     
    }

    console.log(`Your bill is ${total.toFixed(2)} leva.`);
}

filmPremiere(["John Wick", "Drink", "6"]);