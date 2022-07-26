function lunchBreak(input) {
    let nameSeries = input[0];
    let durationSeries = input[1];
    let durationBreak = input[2];

    let lunchTime = durationBreak / 8;
    let restTime = durationBreak / 4;
    let timeForSeries = durationBreak - (restTime + lunchTime);

    let diff = Math.abs(timeForSeries - durationSeries);

    if (timeForSeries >= durationSeries) {
        console.log(`You have enough time to watch ${nameSeries} and left with ${Math.ceil(diff)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${nameSeries}, you need ${Math.ceil(diff)} more minutes.`)
    }
}

lunchBreak(["Game of Thrones", "60", "96"]);