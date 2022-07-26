function skeleton(input) {
    let quotaM = Number(input[0]);
    let quotaS = Number(input[1]);
    let beehive = Number(input[2]);
    let hundredMeters = Number(input[3]);

    let quotaSeconds = quotaM * 60 + quotaS;
    let reducedTime = (beehive / 120) * 2.5;
    let timeMarin = ((beehive / 100) * hundredMeters) - reducedTime;

    let diff = Math.abs(timeMarin - quotaSeconds);

    if (quotaSeconds >= timeMarin) {
        console.log(`Marin Bangiev won an Olympic quota!
His time is ${timeMarin.toFixed(3)}.`);
    } else {
        console.log(`No, Marin failed! He was ${diff.toFixed(3)} second slower.`);
    }
}

skeleton(["1", "20", "1546", "12"]);