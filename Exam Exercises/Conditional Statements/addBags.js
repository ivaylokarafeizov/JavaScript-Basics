function addBags(input) {
    let luggage = Number(input[0]);
    let luggageKilos = Number(input[1]);
    let days = Number(input[2]);
    let luggagesAmount = Number(input[3]);

    let tax = 0;
    let totalPrice = 0;
    let sum = 0;

    if (luggageKilos < 10) {
        tax = 0.20 * luggage;
    } else if (luggageKilos >= 10 && luggageKilos <= 20) {
        tax = 0.5 * luggage;
    } else if (luggageKilos > 20) {
        tax = luggage;
    }

    if (days > 30) {
        totalPrice = tax * 1.10;
    } else if (days >= 7 && days <= 30) {
        totalPrice = tax * 1.15;
    } else if (days < 7) {
        totalPrice = tax * 1.40;
    }

    sum = totalPrice * luggagesAmount;

    console.log(`The total price of bags is: ${sum.toFixed(2)} lv.`);
}

addBags(["30", "18", "15", "2"]);