function foodDelivery(input) {
    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let veggieMenu = Number(input[2]);

    let chickenMenuPrice = chickenMenu * 10.35;
    let fishMenuPrice = fishMenu * 12.40;
    let veggieMenuPrice = veggieMenu * 8.15;

    let MenuSum = chickenMenuPrice + fishMenuPrice + veggieMenuPrice;
    let dessert = MenuSum * 0.20;
    let total = MenuSum + dessert + 2.50;

    console.log(total);
}

foodDelivery(["2", "4", "3"])