function skiTrip(input) {
    let countDay = Number(input[0]);
    let roomType = input[1];
    let rating = input[2];

    let night = countDay - 1;
    let pricePerDay = 0;

    if (roomType == "room for one person") {
        pricePerDay = night * 18.00;
    } else if (roomType == "apartment") {
        pricePerDay = night * 25.00;
        if (countDay > 15) {
            pricePerDay *= 0.50;
        } else if (countDay >= 10 && countDay <= 15) {
            pricePerDay *= 0.65;
        } else {
            pricePerDay *= 0.70;
        }
    } else if (roomType == "president apartment") {
        pricePerDay = night * 35.00;
        if (countDay > 15) {
            pricePerDay *= 0.80;
        } else if (countDay >= 10 && countDay <= 15) {
            pricePerDay *= 0.85;
        } else {
            pricePerDay *= 0.90;
        }
    }

    if (rating == "positive") {
        pricePerDay *= 1.25;
    } else if (rating == "negative") {
        pricePerDay *= 0.90;
    }

    console.log(`${pricePerDay.toFixed(2)}`);
}

skiTrip(["14", "apartment", "positive"]);