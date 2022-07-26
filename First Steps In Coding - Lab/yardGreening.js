function yardGreening(input) {
    let squareMeters = Number(input[0]);

    let priceForGreening = squareMeters * 7.61;
    let discount = 0.18 * priceForGreening;
    let finalPrice = priceForGreening - discount;
    
    console.log(`The final price is: ${finalPrice} lv.
The discount is: ${discount} lv.`);
}

yardGreening(["550"]);