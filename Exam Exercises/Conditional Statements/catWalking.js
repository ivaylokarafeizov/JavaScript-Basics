function catWalking(input) {
    let minutes = Number(input[0]);
    let walksCount = Number(input[1]);
    let calories = Number(input[2]);

    let dailyWalks = minutes * walksCount;
    let caloriesBurnt = dailyWalks * 5;
    let caloriesInStock = calories * 0.5;

    if (caloriesBurnt >= caloriesInStock) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${caloriesBurnt}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${caloriesBurnt}.`);
    }
}

catWalking(["40", "2", "300"]);