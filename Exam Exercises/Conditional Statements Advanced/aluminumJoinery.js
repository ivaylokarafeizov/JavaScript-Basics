function aluminumJoinery(input) {
    let count = Number(input[0]);
    let type = input[1];
    let delivery = input[2];

    let price = 0;

    if (count < 10) {
        console.log("Invalid order");
    } else if (type == "90X130" || type == "100X150" || type == "130X180" || type == "200X300") {
        if (type == "90X130") {
            price = 110;
            if (count > 30 && count <= 60) {
                price *= 0.95;
            } else if (count > 60) {
                price *= 0.92;
            }
        } else if (type == "100X150") {
            price = 140;
            if (count >= 40 && count <= 80) {
                price *= 0.94;
            } else if (count > 80) {
                price *= 0.9;
            }
        } else if (type == "130X180") {
            price = 190;
            if (count >= 20 && count <= 50) {
                price *= 0.93;
            } else if (count > 50) {
                price *= 0.88;
            }
        } else if (type == "200X300") {
            price = 250;
            if (count >= 25 && count <= 50) {
                price *= 0.91;
            } else if (count > 50) {
                price *= 0.86;
            }
        }
        price *= count;
        if (delivery == "With delivery") {
            price += 60;
        }
        if (count > 99) {
            price *= 0.96;
        }
        console.log(`${price.toFixed(2)} BGN`);
    }
}

aluminumJoinery(["105", "100X150", "With delivery"]);