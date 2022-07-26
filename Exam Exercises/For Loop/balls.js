function balls(input) {
    let num = Number(input[0]);

    let points = 0;
    let count = 0;
    let red = 0;
    let orange = 0;
    let yellow = 0;
    let white = 0;
    let black = 0;

    for (let i = 1; i <= num; i++) {
        let ball = input[i];
        if (ball == "red") {
            points += 5;
            red += 1;
        } else if (ball == "orange") {
            points += 10;
            orange += 1;
        } else if (ball == "yellow") {
            points += 15;
            yellow += 1;
        } else if (ball == "white") {
            points += 20;
            white += 1;
        } else if (ball == "black") {
            points = points / 2;
            black += 1;
        } else {
            count = count + 1;
        }
    }
    console.log(`Total points: ${Math.floor(points)}`);
    console.log(`Red balls: ${red}`);
    console.log(`Orange balls: ${orange}`);
    console.log(`Yellow balls: ${yellow}`);
    console.log(`White balls: ${white}`);
    console.log(`Other colors picked: ${count}`);
    console.log(`Divides from black balls: ${black}`);
}

balls(["3", "white", "black", "pink"]);