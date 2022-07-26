function sumOfTwoNumbers(input) {
    let startNumber = Number(input[0]);
    let endNumber = Number(input[1]);
    let magicNumber = Number(input[2]); 
    let combination = 0;
 
    let isFound = false;
    for (let a = startNumber; a <= endNumber; a++) {
        for (let b = startNumber; b <= endNumber; b++) {
            combination++;  
            let sum = a + b;
            if (sum === magicNumber) {
                console.log(`Combination N:${combination} (${a} + ${b} = ${magicNumber})`);
                isFound = true;
                break;
            } 
        } 
        if (isFound === true) {
            break;
        }
    } 
    if (isFound === false) { 
        console.log(`${combination} combinations - neither equals ${magicNumber}`); 
    }
}

sumOfTwoNumbers(["1",
"10",
"5"])