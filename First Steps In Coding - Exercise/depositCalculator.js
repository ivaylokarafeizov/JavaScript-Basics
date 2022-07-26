function depositCalculator(input) {
    let amountDeposit = Number(input[0]);
    let depositTerm = Number(input[1]);
    let annualInterestRate = Number(input[2]);

    let accruedInterest = amountDeposit * annualInterestRate / 100;
    let monthInterestRate = accruedInterest / 12;

    let sum = amountDeposit + (depositTerm * monthInterestRate);

    console.log(sum);
}

depositCalculator(["200", "3", "5.7"])
