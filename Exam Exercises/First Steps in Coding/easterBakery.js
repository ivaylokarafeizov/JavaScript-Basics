function easterBakery(input) {
    let flourPrice = Number(input[0]);
    let flourAmount = Number(input[1]);
    let sugarAmount = Number(input[2]);
    let eggshellsAmount = Number(input[3]);
    let yeastAmount = Number(input[4]);


    let sugarPrice = flourPrice * 0.75;
    let eggsPrice = flourPrice * 1.1;
    let yeastPrice = sugarPrice * 0.2;
    let flourSum = flourPrice * flourAmount;
    let sugarSum = sugarPrice * sugarAmount;
    let eggsSum = eggsPrice * eggshellsAmount;
    let yeastSum = yeastPrice * yeastAmount;

    let sum = flourSum + sugarSum + eggsSum + yeastSum;

    console.log(sum.toFixed(2));
}

easterBakery(["50", "10", "3.5", "6", "1"]);