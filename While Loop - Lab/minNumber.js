function minNumber(input) {
    let num = input[0];
    let index = 1;
    let min = Number.MAX_SAFE_INTEGER;
    while (num !== "Stop") {
        let smallestNum = Number(num);
        if (smallestNum < min) {
            min = smallestNum;
        }
        num = input[index];
        index++;
    }
    console.log(min);
}

minNumber(["100", "99", "80", "70", "Stop"]);