function oscarsCeremony(input) {
    let rent = Number(input[0]);

    let statuettes = rent * 0.70;
    let catering = statuettes * 0.85;
    let sound = catering / 2;
    let sum = rent + statuettes + catering + sound;

    console.log(sum.toFixed(2));
}

oscarsCeremony(["3500"]);