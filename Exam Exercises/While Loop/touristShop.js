function touristShop(input) {
    let index = 0;
    let budget = Number(input[index++]);
    let command = input[index++];
    let counter = 0;
    let priceCounter = 0;

    while (command !== "Stop") {
        let price = Number(input[index++]);
        counter++;
        if (counter % 3 === 0) {
            price = price / 2;
        }
        priceCounter += price;
        budget -= price;
        command = input[index++];
        if (budget < 0) {
            console.log("You don't have enough money!");
            console.log(`You need ${Math.abs(budget).toFixed(2)} leva!`)
            return;
        }
    }
    console.log(`You bought ${counter} products for ${(priceCounter).toFixed(2)} leva.`)
}

touristShop(["153.20",
    "Backpack",
    "25.20",
    "Shoes",
    "54",
    "Sunglasses",
    "30",
    "Stop"
])