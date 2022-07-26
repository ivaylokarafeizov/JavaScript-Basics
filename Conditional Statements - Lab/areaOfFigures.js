function areaOfFigures(input) {
    let figure = input[0];
    let sideOne = Number(input[1]);
    let sideTwo = Number(input[2]);

    if (figure === "square") {
        console.log((sideOne * sideOne).toFixed(3));
    } else if (figure === "rectangle") {
        console.log((sideOne * sideTwo).toFixed(3));
    } else if (figure === "circle") {
        console.log((Math.pow(sideOne, 2) * Math.PI).toFixed(3));
    } else if (figure === "triangle") {
        console.log((sideOne * sideTwo / 2).toFixed(3));
    }
}

areaOfFigures(["rectangle", "7", "2.5"]);