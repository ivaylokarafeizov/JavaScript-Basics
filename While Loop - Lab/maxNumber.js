function maxNumber(input) {
    let num = input[0];
    let index = 1;
    let max = Number.MIN_SAFE_INTEGER;
    while (num !== "Stop") {
        let biggestNum = Number(num);
        if (biggestNum > max) {
            max = biggestNum;
        }
        num = input[index];
        index++;
    }
    console.log(max);
}

maxNumber(["100", "99", "80", "70", "Stop"]);