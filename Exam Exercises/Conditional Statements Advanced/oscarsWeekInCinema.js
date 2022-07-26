function oscarsWeekInCinema(input) {
    let nameOfMovie = input[0];
    let nameOfRoom = input[1];
    let countOfTickets = Number(input[2]);

    let sum = 0.0;

    for (let x = 0; x < countOfTickets; x++) {
        if (nameOfMovie == "A Star Is Born") {
            switch (nameOfRoom) {
                case "normal":sum += 7.5;break;
                case "luxury":sum += 10.5;break;
                case "ultra luxury":sum += 13.5;break;
            }
        }
        if (nameOfMovie == "Bohemian Rhapsody") {
            switch (nameOfRoom) {
                case "normal":sum += 7.35;break;
                case "luxury":sum += 9.45;break;
                case "ultra luxury":sum += 12.75;break;
            }
        }
        if (nameOfMovie == "Green Book") {
            switch (nameOfRoom) {
                case "normal":sum += 8.15;break;
                case "luxury":sum += 10.25;break;
                case "ultra luxury":sum += 13.25;break;
            }
        }
        if (nameOfMovie == "The Favourite") {
            switch (nameOfRoom) {
                case "normal":sum += 8.75;break;
                case "luxury":sum += 11.55;break;
                case "ultra luxury":sum += 13.95;break;
            }
        }
    }
    console.log(`${nameOfMovie} -> ${sum.toFixed(2)} lv.`);
}

oscarsWeekInCinema(["A Star Is Born", "luxury", "42"])