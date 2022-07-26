function suitcasesLoad(input) {
    let capacity = Number(input.shift());
    let index = 0;
    let luggageCounter = 0; 
    let command = input.shift();

    while (command !== 'End') {
        let luggage = Number(command);
        index++; 
        if (index % 3 === 0) {
            luggage *= 1.10;
        } 
        if (capacity - luggage < 0) {
            break;
        } 
        luggageCounter++; 
        capacity -= luggage; 
        command = input.shift();
    }

    if (command === 'End') {
        console.log("Congratulations! All suitcases are loaded!");
        console.log(`Statistic: ${luggageCounter} suitcases loaded.`);
    } else {
        console.log("No more space!");
        console.log(`Statistic: ${luggageCounter} suitcases loaded.`);
    }
}

suitcasesLoad(["550",
    "100",
    "252",
    "72",
    "End"
])