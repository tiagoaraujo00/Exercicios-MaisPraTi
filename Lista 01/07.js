// As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o número de maçãs compradas: ", function (input) {
  const numMacas = parseInt(input);
  let precoPorMaca;

  if (numMacas < 12) {
    precoPorMaca = 0.3;
  } else {
    precoPorMaca = 0.25;
  }

  const valorTotal = numMacas * precoPorMaca;

  console.log(`O valor total da compra é: R$ ${valorTotal.toFixed(2)}`);

  rl.close();
});
