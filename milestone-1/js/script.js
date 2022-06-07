//Imposto il ciclo for per stampare i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
  let numberText = i;
  // Imposto l'if statement
  if (i % 3 === 0 && i % 5 === 0) {
    numberText = "FizzBuzz";
  } else if (i % 3 === 0) {
    numberText = "Fizz";
  } else if (i % 5 === 0) {
    numberText = "Buzz";
  }
  //   Stampo in console
  console.log(numberText);
}
