function fitnessCard(input) {
    let budget = input[0];
    let gender = input[1];
    let age = Number(input[2]);
    let sport = input[3];

    let sum = 0;

    if (gender === "m") {
        switch (sport) {
            case "Gym":
                sum = 42;
                break;
            case "Boxing":
                sum = 41;
                break;
            case "Yoga":
                sum = 45;
                break;
            case "Zumba":
                sum = 34;
                break;
            case "Dances":
                sum = 51;
                break;
            case "Pilates":
                sum = 39;
                break;
        }
    }

    if (gender === "f") {
        switch (sport) {
            case "Gym":
                sum = 35;
                break;
            case "Boxing":
                sum = 37;
                break;
            case "Yoga":
                sum = 42;
                break;
            case "Zumba":
                sum = 31;
                break;
            case "Dances":
                sum = 53;
                break;
            case "Pilates":
                sum = 37;
                break;
        }
    }

    if (age <= 19) {
        sum *= 0.8;
    }

    if (budget >= sum) {
        console.log(`You purchased a 1 month pass for ${sport}.`);
    } else if (budget <= sum) {
        console.log(`You don't have enough money! You need $${(sum - budget).toFixed(2)} more.`);
    }
}

fitnessCard(["25", "m", "23", "Gym"]);