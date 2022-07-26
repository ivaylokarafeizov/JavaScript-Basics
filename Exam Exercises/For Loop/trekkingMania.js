function trekkingMania(input) {
    let groups = Number(input[0]);

    let musala = 0;
    let montBlanc = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;

    for (let i = 1; i <= input.length; i++) {
        let alpinists = Number(input[i]);

        if (alpinists <= 5) {
            musala += alpinists;
        } else if (alpinists >= 6 && alpinists <= 12) {
            montBlanc += alpinists;
        } else if (alpinists >= 13 && alpinists <= 25) {
            kilimanjaro += alpinists;
        } else if (alpinists >= 26 && alpinists <= 40) {
            k2 += alpinists;
        } else if (alpinists >= 41) {
            everest += alpinists;
        }
    }
    let allAlpinists = musala + montBlanc + kilimanjaro + k2 + everest;

    console.log(`${(musala / allAlpinists * 100).toFixed(2)}%`);
    console.log(`${(montBlanc / allAlpinists * 100).toFixed(2)}%`);
    console.log(`${(kilimanjaro / allAlpinists * 100).toFixed(2)}%`);
    console.log(`${(k2 / allAlpinists * 100).toFixed(2)}%`);
    console.log(`${(everest / allAlpinists * 100).toFixed(2)}%`);
} 

trekkingMania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);