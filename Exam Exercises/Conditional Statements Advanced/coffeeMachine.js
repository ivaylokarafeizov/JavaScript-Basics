function coffeeMachine(input) {
    let drink = input[0];
    let sugar = input[1];
    let drinksCount = Number(input[2]);
    
    let price = 0;

    switch (drink) {
        case "Espresso":
            if (sugar === "Without") {
                price = drinksCount * 0.90;
                price = price * 0.65
            } else if (sugar === "Normal") {
                price = drinksCount * 1;
            } else if (sugar === "Extra") {
                price = drinksCount * 1.20;
            }

            if (drinksCount >= 5 && drink === "Espresso") {
                price = price * 0.75
            }

            if (price > 15) {
                price = price * 0.80;
            }
            break; 
        case "Cappuccino":
            if (sugar === "Without") {
                price = drinksCount * 1;
                price = price * 0.65
            } else if (sugar === "Normal") {
                price = drinksCount * 1.20;
            } else if (sugar === "Extra") {
                price = drinksCount * 1.60;
            }

            if (price >= 15) {
                price = price * 0.80;
            }
            break; 
        case "Tea":
            if (sugar === "Without") {
                price = drinksCount * 0.50;
                price = price * 0.65
            } else if (sugar === "Normal") {
                price = drinksCount * 0.60;
            } else if (sugar === "Extra") {
                price = drinksCount * 0.70;
                break;
            }

            if (price >= 15) {
                price = price * 0.80;
            }
    }
    console.log(`You bought ${drinksCount} cups of ${drink} for ${price.toFixed(2)} lv.`)
}

coffeeMachine(["Espresso", "Without", "10"]);