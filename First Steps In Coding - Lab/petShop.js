function petShop(input) {
    let dogFoodPacks = Number(input[0]);
    let catFoodPacks = Number(input[1]);

    let price = dogFoodPacks * 2.50 + catFoodPacks * 4;
    
    console.log(price);
}

petShop(["5", "4"]);