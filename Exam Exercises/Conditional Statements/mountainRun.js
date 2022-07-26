function mountainRun(input) {
    let recordSeconds = Number(input[0]);
    let length = Number(input[1]);
    let timePerMeter = Number(input[2]);

    let climb = length * timePerMeter;
    let timeAdded = Math.floor(length / 50);
    let seconds = timeAdded * 30;
    let totalTime = climb + seconds;
    let timeNeeded = totalTime - recordSeconds;

    if (recordSeconds <= totalTime) {
        console.log(`No! He was ${timeNeeded.toFixed(2)} seconds slower.`);
    } else {
        console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`);
    }
}

mountainRun(["5554.36", "1340", "3.23"]);