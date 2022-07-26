function basketballEquipment(input) {
    let yearFee = Number(input[0]);

    let shoesPrice = yearFee - (yearFee * 0.40);
    let clothesPrice = shoesPrice - (shoesPrice * 0.20);
    let ballPrice = clothesPrice / 4;
    let accessories = ballPrice / 5;

    let sum = yearFee + shoesPrice + clothesPrice + ballPrice + accessories;

    console.log(sum.toFixed(2));
}

basketballEquipment(["365"]);