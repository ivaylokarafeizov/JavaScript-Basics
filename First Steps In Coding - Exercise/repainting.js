function repainting(input) {
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let deteregent = Number(input[2]);
    let hours = Number(input[3]);

    let nylonPrice = (nylon + 2) * 1.50;
    let paintPrice = (paint + (paint * 0.10)) * 14.50;
    let deteregentPrice = deteregent * 5.00;

    let materials = nylonPrice + paintPrice + deteregentPrice + 0.40;
    let workersMoney = (materials * 0.30) * hours;
    let sum = materials + workersMoney;

    console.log(sum);
}

repainting(["10", "11", "4", "8"])
