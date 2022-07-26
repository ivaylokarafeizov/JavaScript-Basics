function gymnastics(input) {
    let country = input[0];
    let device = input[1];

    let difficulty = 0;
    let performance = 0;
    let mark = 0;

    if (device === "ribbon") {
        if (country === "Russia") {
            difficulty = 9.100;
            performance = 9.400;
        } else if (country === "Bulgaria") {
            difficulty = 9.600;
            performance = 9.400;
        } else {
            difficulty = 9.200;
            performance = 9.500;
        }
    } else if (device === "hoop") {
        if (country === "Russia") {
            difficulty = 9.300;
            performance = 9.800;
        } else if (country === "Bulgaria") {
            difficulty = 9.550;
            performance = 9.750;
        } else {
            difficulty = 9.450;
            performance = 9.350;
        }
    } else {
        if (country === "Russia") {
            difficulty = 9.600;
            performance = 9.000;
        } else if (country === "Bulgaria") {
            difficulty = 9.500;
            performance = 9.400;
        } else {
            difficulty = 9.700;
            performance = 9.150;
        }
    }
    mark = difficulty + performance;
    if (mark < 20) {
        let needed = 20 - mark;
        needed = (needed / 20) * 100;
        console.log(`The team of ${country} get ${mark.toFixed(3)} on ${device}.`);
        console.log(`${needed.toFixed(2)}%`);
    }
}

gymnastics(["Bulgaria", "ribbon"]);