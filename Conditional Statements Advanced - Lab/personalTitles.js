function personalTitles(input) {
    let age = Number(input[0]);
    let gender = input[1];

    let title;

    if (age >= 16) {
        switch (gender) {
            case "m":
                title = "Mr.";
                break;
            case "f":
                title = "Ms.";
                break;
        }
    } else if (age < 16) {
        switch (gender) {
            case "m":
                title = "Master";
                break;
            case "f":
                title = "Miss";
                break;
        }
    }
    console.log(title);
}

personalTitles(["12", "f"]);