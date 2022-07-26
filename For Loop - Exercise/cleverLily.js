function cleverLily(input) {
    let lilysAge = Number(input[0]);
    let washMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let toysCounter = 0;
    let savedMoney = 0;
    let stolenMoney = 0;
    let addedMoney = 10;

    for (let i = 1; i <= lilysAge; i++) {
        if (i % 2 === 0) {
            savedMoney += addedMoney;
            stolenMoney++;
            addedMoney += 10;
        } else {
            toysCounter++;
        }
    }
    let totalMoneyFromToys = toyPrice * toysCounter;
    let totalSavedMoney = (savedMoney + totalMoneyFromToys) - stolenMoney;

    if (totalSavedMoney >= washMachinePrice) {
        console.log(`Yes! ${(totalSavedMoney - washMachinePrice).toFixed(2)}`);
    } else if (totalSavedMoney < washMachinePrice) {
        console.log(`No! ${(washMachinePrice - totalSavedMoney).toFixed(2)}`);
    }
}

cleverLily(["21", "1570.98", "3"]);