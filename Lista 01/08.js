// Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o primeiro valor: ", function (inputA) {
  const A = parseFloat(inputA);

  rl.question("Digite o segundo valor: ", function (inputB) {
    const B = parseFloat(inputB);

    if (A < B) {
      console.log(`Os valores em ordem crescente: ${A}, ${B}`);
    } else {
      console.log(`Os valores em ordem crescente: ${B}, ${A}`);
    }

    rl.close();
  });
});
