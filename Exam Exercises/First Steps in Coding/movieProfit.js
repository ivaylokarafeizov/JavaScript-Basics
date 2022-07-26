function movieProfit(input) {
    let name = input[0];
    let days = Number(input[1]);
    let tickets = Number(input[2]);
    let ticketPrice = Number(input[3]);
    let percent = Number(input[4]);

    let ticketsDayPrice = tickets * ticketPrice;
    let fullPeriodPrice = days * ticketsDayPrice;
    let cinemaPercent = fullPeriodPrice * percent / 100;
    let moviePercent = fullPeriodPrice - cinemaPercent;

    console.log(`The profit from the movie ${name} is ${moviePercent.toFixed(2)} lv.`);
}

movieProfit(["The Programmer", "20", "500", "7.50", "7"]);