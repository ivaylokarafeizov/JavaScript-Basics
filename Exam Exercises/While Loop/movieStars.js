function movieStars(input) {
    let budget = Number(input.shift()); 
    let command = input.shift();
    let endBudget = false;

    while (command != "ACTION") {
        let actor = command;
        let salary = 0;
        if (actor.length <= 15) {
            salary = Number(input.shift());
        } else {
            salary = 0.20 * budget;
        }
        budget -= salary;
        if (budget <= 0) { 
            console.log(`We need ${Math.abs(budget).toFixed(2)} leva for our actors.`);
            endBudget = true;
            break;
        }

        command = input.shift();
    }
    if (!endBudget) {
        console.log(`We are left with ${budget.toFixed(2)} leva.`);
    }
} 

movieStars(["90000",
    "Christian Bale",
    "70000.50",
    "Leonard DiCaprio",
    "Kevin Spacey",
    "24000.99"
])