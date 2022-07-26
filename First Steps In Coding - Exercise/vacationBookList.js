function vacationBookList(input) {
    let pages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);

    let timeForReading = pages / pagesPerHour;
    let hoursNeeded = timeForReading / days;

    console.log(hoursNeeded);
}

vacationBookList(["212", "20", "2"]);