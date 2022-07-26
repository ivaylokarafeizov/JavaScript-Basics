function movieDay(input) {
    let timeGiven = Number(input[0]);
    let scenes = Number(input[1]);
    let timePerStage = Number(input[2]);

    let stageBuild = timeGiven * 0.15;
    let filmingScenes = scenes * timePerStage;
    let timeToComplete = stageBuild + filmingScenes;
    let timeNeeded = timeToComplete - timeGiven;

    if (timeGiven < timeToComplete) {
        console.log(`Time is up! To complete the movie you need ${Math.round(timeNeeded)} minutes.`);
    } else if (timeGiven > timeToComplete) {
        console.log(`You managed to finish the movie on time! You have ${Math.abs(Math.round(timeNeeded))} minutes left!`);
    }
}
 
movieDay(["60", "15", "3"]);