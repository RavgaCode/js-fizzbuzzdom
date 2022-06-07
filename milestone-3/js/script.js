//Imposto il ciclo for per stampare i quadrati, associare le classi e scrivere numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
  let numberText = i;
  // Dichiaro la variabile per la creazione del div square
  const numberSquare = document.createElement("div");
  numberSquare.classList.add("number-square");
  // Imposto l'if statement
  if (i % 3 === 0 && i % 5 === 0) {
    numberText = "FizzBuzz";
    numberSquare.classList.add("fizz-buzz");
  } else if (i % 3 === 0) {
    numberText = "Fizz";
    numberSquare.classList.add("fizz");
  } else if (i % 5 === 0) {
    numberText = "Buzz";
    numberSquare.classList.add("buzz");
  }
  //   Aggiungo il testo al div square
  numberSquare.innerHTML = `${numberText}`;
  // Stampo in pagina aggiungendo il div square alla grid
  const numbersGrid = document.getElementById("numbers-grid");
  numbersGrid.appendChild(numberSquare);
}
