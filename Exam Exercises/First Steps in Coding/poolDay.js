function poolDay(input) {
    let peopleCount = Number(input[0]);
    let tax = Number(input[1]);
    let sunbedPricePerOne = Number(input[2]);
    let umbrellaPricePerOne = Number(input[3]);

    let taxes = peopleCount * tax;
    let sunbedPrice = Math.ceil(peopleCount * 0.75) * sunbedPricePerOne;
    let umbrellaPrice = Math.ceil(peopleCount * 0.5) * umbrellaPricePerOne;
    let sum = taxes + sunbedPrice + umbrellaPrice;

    console.log(`${sum.toFixed(2)} lv.`);
}

poolDay(["50", "6", "8", "4"]);