function travelAgency(input) {
    let town = input[0];
    let pack = input[1];
    let discount = input[2];
    let days = Number(input[3]);

    let cost = 0;
    let price = 0;

    if ((town === "Bansko" || town === "Borovets") && (pack === "withEquipment" || pack === "noEquipment")) {
        if (pack === "withEquipment") {
            switch (discount) {
                case "yes":
                    price = 100 * 0.9;
                    break;
                case "no":
                    price = 100;
                    break
            }
        } else if (pack === "noEquipment") {
            switch (discount) {
                case "yes":
                    price = 80 * 0.95;
                    break;
                case "no":
                    price = 80;
                    break
            }
        }
    } else if ((town === "Varna" || town === "Burgas") && (pack === "withBreakfast" || pack === "noBreakfast")) {
        if (pack === "withBreakfast") {
            switch (discount) {
                case "yes":
                    price = 130 * 0.88;
                    break;
                case "no":
                    price = 130;
                    break;
            }
        } else if (pack === "noBreakfast") {
            switch (discount) {
                case "yes":
                    price = 100 * 0.93;
                    break;
                case "no":
                    price = 100;
                    break;
            }
        }
    } else {
        console.log(`Invalid input!`);
        return;
    }

    if (days >= 1 && days <= 7) {
        cost = price * days;
    } else if (days > 7) {
        cost = price * (days - 1);
    } else if (days < 1) {
        console.log(`Days must be positive number!`);
        return;
    }
    console.log(`The price is ${cost.toFixed(2)}lv! Have a nice time!`);
}

travelAgency(["Burgas", "noBreakfast", "no", "4"]);