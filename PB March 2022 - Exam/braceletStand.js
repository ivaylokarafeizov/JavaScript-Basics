function braceletStand(input) {
    let money = Number(input[0]);
    let sellings = Number(input[1]);
    let diff = Number(input[2]);
    let gift = Number(input[3]);

    let savedMoney = money * 5;
    let wonMoney = sellings * 5;
    let sum = savedMoney + wonMoney;
    let total = sum - diff;

    if (total >= gift) {
        console.log(`Profit: ${total.toFixed(2)} BGN, the gift has been purchased.`);
    } else {
        console.log(`Insufficient money: ${(gift - total).toFixed(2)} BGN.`);
    }
}

braceletStand(["5.12",
    "32.05",
    "15",
    "150"
])