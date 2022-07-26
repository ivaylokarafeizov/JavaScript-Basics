function foodForPets(input) {
    let index = 0;
    let days = Number(input[index++]); 
    let totalFood = Number(input[index++]); 

    let dogFood = 0;
    let catFood = 0;
    let bonus = 0;

    for (let i = 1; i <= days; i++) {
        let dogsfood = Number(input[index++]);
        dogFood += dogsfood; 
        let catsfood = Number(input[index++]);
        catFood += catsfood; 

        if (i % 3 === 0) {
            bonus += (dogsfood + catsfood) * 0.1;
        }
    }

    bonus = Math.round(bonus);

    console.log(`Total eaten biscuits: ${bonus}gr.`);
    console.log(`${(((dogFood + catFood) / totalFood) * 100).toFixed(2)}% of the food has been eaten.`);
    console.log(`${((dogFood / (dogFood + catFood)) * 100).toFixed(2)}% eaten from the dog.`);
    console.log(`${((catFood / (dogFood + catFood)) * 100).toFixed(2)}% eaten from the cat.`);
}

foodForPets(["3", "1000", "300", "20", "100", "30", "110", "40"]);