function fitnessCenter(input) {
    let countPeople = Number(input.shift());
    let counterBack = 0;
    let counterChest = 0;
    let counterLegs = 0;
    let counterAbs = 0;
    let counterShake = 0;
    let counterBar = 0;

    for (let i = 0; i < countPeople; i++) {
        let train = input.shift();
        if (train === "Back") {
            counterBack++;
        } else if (train === "Chest") {
            counterChest++;
        } else if (train === "Legs") {
            counterLegs++;
        } else if (train === "Abs") {
            counterAbs++;
        } else if (train === "Protein shake") {
            counterShake++;
        } else if (train === "Protein bar") {
            counterBar++;
        }
    }
    let visitors = counterChest + counterLegs + counterBack + counterAbs
    let peopleTrainig = (visitors / countPeople) * 100;
    let peopleProduct = 100 - peopleTrainig;

    console.log(`${counterBack} - back`)
    console.log(`${counterChest} - chest`)
    console.log(`${counterLegs} - legs`)
    console.log(`${counterAbs} - abs`)
    console.log(`${counterShake} - protein shake`)
    console.log(`${counterBar} - protein bar`)
    console.log(`${peopleTrainig.toFixed(2)}% - work out`)
    console.log(`${peopleProduct.toFixed(2)}% - protein`)
}

fitnessCenter(["10",
    "Back",
    "Chest",
    "Legs",
    "Abs",
    "Protein shake",
    "Protein bar",
    "Protein shake",
    "Protein bar",
    "Legs",
    "Abs"
])