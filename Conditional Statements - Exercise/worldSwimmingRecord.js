function worldSwimmingRecord(input) {
    let recordInSeconds = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeInSecForOneMeter = Number(input[2]);

    let delay = Math.floor(distanceInMeters / 15);
    let delayInSeconds = delay * 12.5;

    let time = distanceInMeters * timeInSecForOneMeter + delayInSeconds;

    if (time < recordInSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${time.toFixed(2)} seconds.`);
    }else {
        let diff = time - recordInSeconds;
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
    }
}

worldSwimmingRecord(["10464", "1500", "20"]);