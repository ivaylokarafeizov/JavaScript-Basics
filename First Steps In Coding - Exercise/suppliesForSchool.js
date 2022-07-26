function suppliesForSchool(input) {
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let cleaner = Number(input[2]);
    let discount = Number(input[3]);

    let pensPrice = pens * 5.80;
    let markersPrice = markers * 7.20;
    let cleanerPrice = cleaner * 1.20;

    let materialsPrice = pensPrice + markersPrice + cleanerPrice;
    let priceDiscount = materialsPrice - (materialsPrice * (discount / 100));

    console.log(priceDiscount);
}
suppliesForSchool(["2", "3", "4", "25"]);