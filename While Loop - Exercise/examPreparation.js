function examPreparation(input) {
    let badGradesLimit = Number(input.shift());
    let badGradesCounter = 0;
    let goodGradesCounter = 0;
    let task;
    let sum = 0;
    let lastTask = "";
    let grade = 0;

    while (badGradesCounter < badGradesLimit) {
        task = input.shift();
        grade = Number(input.shift());

        if (task === "Enough") {
            let total = badGradesCounter + goodGradesCounter;
            let avg = sum / total;
            console.log(`Average score: ${avg.toFixed(2)}`);
            console.log(`Number of problems: ${total}`);
            console.log(`Last problem: ${lastTask}`);
            break;
        }

        if (grade <= 4) {
            badGradesCounter++;
        } else {
            goodGradesCounter++;
        }
        lastTask = task;
        sum += grade;
    }
    if (badGradesCounter == badGradesLimit) {
        console.log(`You need a break, ${badGradesCounter} poor grades.`);
    }
}

examPreparation(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"
]);