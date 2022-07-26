function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let stats = Number(input[1]);
    let clothes = Number(input[2]);

    let decor = budget * 0.10;
    let clothesPrice = stats * clothes;

    if (stats >= 150) {
        clothesPrice = clothesPrice * 0.90;
    }

    let totalPrice = decor + clothesPrice;
    let diff = Math.abs(totalPrice - budget);
    
    if (totalPrice <= budget) {
        console.log(`Action!
Wingard starts filming with ${diff.toFixed(2)} leva left.`);
    }else if (totalPrice > budget) {
        console.log(`Not enough money!
Wingard needs ${diff.toFixed(2)} leva more.`);
    }
}

godzillaVsKong(["20000", "120", "55.5"]);