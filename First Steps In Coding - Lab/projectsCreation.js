function projectsCreation(input) {
    let architectName = input[0];
    let hoursPerProject = 3;
    let projectsCount = Number(input[1]);
    
    let hoursNeeded = hoursPerProject * projectsCount;

    console.log(`The architect ${architectName} will need ${hoursNeeded} hours to complete ${projectsCount} project/s.`);
}

projectsCreation(["Gosho", "3"])