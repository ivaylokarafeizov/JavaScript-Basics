function careOfPuppy(input) {
    let foodBought = Number(input[0]) * 1000;
    let index = 1;
    let foodEatenPerDay = Number(input[index]);
    let sum = 0;
    let inputElement = input[index];

    while (inputElement !== "Adopted") {
        foodEatenPerDay = Number(input[index]);
        sum += foodEatenPerDay;
        if (inputElement === "Adopted") {
            break;
        }
        index++;
        inputElement = input[index];
    }

    if (sum <= foodBought) {
        console.log(`Food is enough! Leftovers: ${foodBought - sum} grams.`);
    } else {
        console.log(`Food is not enough. You need ${sum - foodBought} grams more.`);
    }
}

careOfPuppy(["2",
    "999",
    "456",
    "999",
    "999",
    "123",
    "456",
    "Adopted"
])