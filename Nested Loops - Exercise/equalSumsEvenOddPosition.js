function equalSumsEvenOddPosition(input) {
    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    let result = ``;
    let sum1 = 0;
    let sum2 = 0;
    for (let currentNumber = firstNumber; currentNumber <= secondNumber; currentNumber++) {
        let num = currentNumber.toString();
        sum1 = Number(num[0]) + Number(num[2]) + Number(num[4]);
        sum2 = Number(num[1]) + Number(num[3]) + Number(num[5]);
        if (sum1 === sum2) {
            result += `${num} `;
        }
    }
    console.log(result);
}

equalSumsEvenOddPosition(["100000", "100050"])