function birthdayParty(input) {
    let hallRental = Number(input[0]);

    let cakePrice = hallRental * 0.2;
    let drinksPrice = cakePrice * 0.55;
    let animatorPrice = hallRental / 3;
    let moneyNeeded = hallRental + cakePrice + drinksPrice + animatorPrice;

    console.log(moneyNeeded);
}

birthdayParty(["3720"])