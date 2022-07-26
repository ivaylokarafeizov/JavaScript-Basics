function agencyProfit(input) {
    let company = input[0];
    let ticketsCountAdults = Number(input[1]);
    let ticketsCountKids = Number(input[2]);
    let neto = Number(input[3]);
    let assist = Number(input[4]);

    let priceTicketKids = assist + (neto * 0.3);
    let priceTicketAdults = neto + assist;
    let sumTickets = (ticketsCountKids * priceTicketKids) + (ticketsCountAdults * priceTicketAdults);

    let money = sumTickets * 0.20;
    console.log(`The profit of your agency from ${company} tickets is ${money.toFixed(2)} lv.`);
}

agencyProfit(["Ryanair",
"60",
"23",
"158.96",
"39.12"])
