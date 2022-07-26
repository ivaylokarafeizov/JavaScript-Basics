function paintingEggs(input) {
    let size = input[0];
    let color = input[1];
    let batch = Number(input[2]);

    let price = 0;

    if (size === "Large") {
        if (color === "Red") {
            price = 16;
        } else if (color === "Green") {
            price = 12;
        } else if (color === "Yellow") {
            price = 9;
        }
    } else if (size === "Medium") {
        if (color === "Red") {
            price = 13;
        } else if (color === "Green") {
            price = 9;
        } else if (color === "Yellow") {
            price = 7;
        }
    } else if (size === "Small") {
        if (color === "Red") {
            price = 9;
        } else if (color === "Green") {
            price = 8;
        } else if (color === "Yellow") {
            price = 5;
        }
    }

    let sum = batch * price;
    let diff = sum * 0.35;
    let total = sum - diff;

    console.log(`${total.toFixed(2)} leva.`);
}

paintingEggs(["Medium", "Green", "5"]);