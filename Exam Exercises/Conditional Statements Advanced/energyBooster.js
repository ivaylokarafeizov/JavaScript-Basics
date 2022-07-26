function energyBooster(input) {
    let fruit = input[0];
    let size = input[1];
    let amount = Number(input[2]);

    let set;

    switch (fruit) {
        case "Watermelon":
            if (size === "small") {
                set = 2 * 56 * amount;
            } else if (size === "big") {
                set = 5 * 28.70 * amount;
            }
            break;
        case "Mango":
            if (size === "small") {
                set = 2 * 36.66 * amount;
            } else if (size === "big") {
                set = 5 * 19.60 * amount;
            }
            break;
        case "Pineapple":
            if (size === "small") {
                set = 2 * 42.10 * amount;
            } else if (size === "big") {
                set = 5 * 24.80 * amount;
            }
            break;
        case "Raspberry":
            if (size === "small") {
                set = 2 * 20 * amount;
            } else if (size === "big") {
                set = 5 * 15.20 * amount;
            }
            break;
    }

    if (set >= 400 && set <= 1000) {
        set *= 0.85;
    } else if (set > 1000) {
        set *= 0.5;
    }
    console.log(`${set.toFixed(2)} lv.`);
}

energyBooster(["Watermelon", "big", "4"]);