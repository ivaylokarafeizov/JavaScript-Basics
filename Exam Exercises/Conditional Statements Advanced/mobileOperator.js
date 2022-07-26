function mobileOperator(input) {
    let contract = input[0];
    let type = input[1];
    let addedPhone = input[2];
    let months = Number(input[3]);

    let price;

    if (contract === "one") {
        if (type === "Small") {
            price = 9.98;
            if (addedPhone === "yes") {
                if (price <= 10) {
                    price = 9.98 + 5.50;
                }
            }
        } else if (type === "Middle") {
            price = 18.99;
            if (addedPhone === "yes") {
                if (price <= 30) {
                    price = 18.99 + 4.35;
                }
            }
        } else if (type === "Large") {
            price = 25.98;
            if (addedPhone === "yes") {
                if (price <= 30) {
                    price = 25.98 + 4.35;
                }
            }
        } else if ("ExtraLarge") {
            price = 35.99;
            if (addedPhone === "yes") {
                if (price > 30) {
                    price = 35.99 + 3.85;
                }
            }
        }
    } else if (contract === "two") {
        if (type === "Small") {
            price = 8.58;
            if (addedPhone === "yes") {
                if (price <= 10) {
                    price = price + 5.50;
                }
            }
        } else if (type === "Middle") {
            price = 17.09;
            if (addedPhone === "yes") {
                if (price <= 30) {
                    price = 17.09 + 4.35;
                }
            }
        } else if (type === "Large") {
            price = 23.59;
            if (addedPhone === "yes") {
                if (price <= 30) {
                    price = 23.59 + 4.35;
                }
            }
        } else if ("ExtraLarge") {
            price = 31.79;
            if (addedPhone === "yes") {
                price = 31.79 + 3.85;
            }
        }
    }

    if (contract === "two") {
        price = price - price * 0.0375;
    }

    let totalPrice = price * months;
    console.log(`${totalPrice.toFixed(2)} lv.`);
}

mobileOperator(["two", "Large", "no", "10"]);