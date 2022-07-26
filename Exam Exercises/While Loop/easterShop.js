function easterShop(input) {
    let index = 0;
    let startingEggs = Number(input[index]);
    let command = input[index++];
    let eggsBuy = 0;

    while (command !== "Close") {
        if (command === "Fill") {
            let additionalEggs = Number(input[index]);
            startingEggs += additionalEggs;
        }
        if (command === "Buy") {
            let countSoldEggs = Number(input[index]);
            if (countSoldEggs <= startingEggs) {
                startingEggs -= countSoldEggs;
                eggsBuy += countSoldEggs;
            } else {
                console.log("Not enough eggs in store!");
                console.log(`You can buy only ${startingEggs}.`);
                break;
            }
        }
        command = input[index++];
    }
    if (command === "Close") {
        console.log("Store is closed!");
        console.log(`${eggsBuy} eggs sold.`);
    }
}

easterShop(["13",
    "Buy",
    "8",
    "Fill",
    "3",
    "Buy",
    "10"
])