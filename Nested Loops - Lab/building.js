function building(input) {
    let floors = Number(input[0]);
    let rooms = Number(input[1]);

    for (let floor = floors; floor > 0; floor--) {
        let str = "";
        for (let room = 0; room < rooms; room++) {
            if (floor == floors) {
                str += "L" + floor + room + " ";
            } else if (floor % 2 == 0) {
                str += "O" + floor + room + " ";
            } else {
                str += "A" + floor + room + " ";
            }
        }
        console.log(str);
    }
}

building(["6", "4"]);