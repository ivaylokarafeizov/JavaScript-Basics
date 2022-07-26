function multiplyTable(input) {
  let number = Number(input[0]);
  let lastDigit = number % 10;
  let removedDigit = (number - lastDigit) / 10;
  let middleDigit = removedDigit % 10;
  let firstDigit = (removedDigit - middleDigit) / 10;

  for (let i = 1; i <= lastDigit; i++) {
    for (let j = 1; j <= middleDigit; j++) {
      for (let k = 1; k <= firstDigit; k++) {
        console.log(`${i} * ${j} * ${k} = ${i * j * k};`);
      }
    }
  }
}

multiplyTable(["324"]);
