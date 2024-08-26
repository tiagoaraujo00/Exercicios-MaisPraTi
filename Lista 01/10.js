// Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite um número inteiro: ", function (input) {
  const valor = parseInt(input);

  for (let i = 0; i < 10; i++) {
    console.log(valor);
  }

  rl.close();
});
