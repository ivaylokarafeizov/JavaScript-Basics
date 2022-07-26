function series(input) {
    let budget = Number(input.shift());
    let serials = Number(input.shift()); 

    let totalPrice = 0;
    for (let serial = 1; serial <= serials; serial++) {
        let name = input.shift();
        let price = Number(input.shift()); 
        switch (name) {
            case "Thrones":
                price = 0.5 * price;
                break;
            case "Lucifer":
                price = 0.6 * price;
                break;
            case "Protector":
                price = 0.7 * price;
                break;
            case "TotalDrama":
                price = 0.8 * price;
                break;
            case "Area":
                price = 0.9 * price;
                break; 
        }
        totalPrice += price;
    } 
    if (budget >= totalPrice) {
        let leftMoney = budget - totalPrice;
        console.log(`You bought all the series and left with ${leftMoney.toFixed(2)} lv.`);
    } else {
        let needMoney = totalPrice - budget;
        console.log(`You need ${needMoney.toFixed(2)} lv. more to buy the series!`);
    }
} 

series(["10",
    "3",
    "Thrones",
    "5",
    "Riverdale",
    "5",
    "Gotham",
    "2"
])