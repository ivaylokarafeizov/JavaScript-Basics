function easterLunch(input) {
    let easterCakesCount = Number(input[0]);
    let eggshellsCount = Number(input[1]);
    let cookiesKilograms = Number(input[2]);

    let easterCakesPrice = easterCakesCount * 3.20;
    let eggsPrice = eggshellsCount * 4.35;
    let cookiesPrice = cookiesKilograms * 5.40;
    let eggPaintPrice = eggshellsCount * 12 * 0.15;

    let sum = easterCakesPrice + eggsPrice + cookiesPrice + eggPaintPrice;

    console.log(sum.toFixed(2));
}

easterLunch(["3", "2", "3"]);