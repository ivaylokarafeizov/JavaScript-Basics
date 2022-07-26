function excursion(input) {
    let people = Number(input[0]);
    let nights = Number(input[1]);
    let mapsCount = Number(input[2]);
    let ticketsCount = Number(input[3]);

    let nightsPrice = nights * 20;
    let mapsPrice = mapsCount * 1.60;
    let ticketsPrice = ticketsCount * 6;
    let sum = nightsPrice + mapsPrice + ticketsPrice;
    let groupTotal = people * sum;
    let sumWithAds = groupTotal * 1.25;

    console.log(sumWithAds.toFixed(2));
}

excursion(["20",
    "14",
    "30",
    "6"
])