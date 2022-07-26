function shopping(input) {
    let budget = Number(input[0]);
    let VGACount = Number(input[1]);
    let CPUCount = Number(input[2]);
    let RAMCount = Number(input[3]);

    let moneyForVGA = VGACount * 250;
    let priceCPU = moneyForVGA * 0.35;
    let moneyForCPU = priceCPU * CPUCount;
    let priceRAM = moneyForVGA * 0.10;
    let moneyForRAM = RAMCount * priceRAM;

    let totalMoney = moneyForVGA + moneyForCPU + moneyForRAM;

    if (VGACount > CPUCount) {
        totalMoney = totalMoney * 0.85;
    }

    let diff = Math.abs(totalMoney - budget);

    if (budget >= totalMoney) {
        console.log(`You have ${diff.toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`);
    }
}

shopping(["900", "2", "1", "3"]);