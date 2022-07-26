function tennisRanklist(input) {
    let tournaments = Number(input[0]);
    let totalPoints = Number(input[1]);
    let currentPoints = 0;
    let points = 0;
    let winsCounter = 0;
    let index = 2;
    let stage = input[index];
    index++;
 
    for (let i = 1; i <= tournaments; i++) {  
        if (stage == 'W') {
            points = 2000;
            winsCounter++;
        } else if (stage == 'F') {
            points = 1200;
        } else if (stage == 'SF') {
            points = 720;
        }
        totalPoints += points;
        currentPoints += points;
        stage = input[index]; 
        index++;
    }
    let avgPoints = currentPoints / tournaments;
    let winPercentage = winsCounter / tournaments * 100;
    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${Math.floor(avgPoints)}`);
    console.log(`${winPercentage.toFixed(2)}%`);
}

tennisRanklist(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"])
