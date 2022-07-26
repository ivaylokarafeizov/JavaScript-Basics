function fishTank(input) {
    let lenght = Number(input[0]);
    let weight = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);

    let volume = lenght * weight * height;
    let liters = volume * 0.001;
    let percentage = percent / 100;
    let litersNeeded = liters * (1 - percentage);

    console.log(litersNeeded);
}

fishTank(["85", "75", "47", "17"]);