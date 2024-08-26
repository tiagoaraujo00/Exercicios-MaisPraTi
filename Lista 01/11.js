// Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const numeros = [];

function solicitarNumero(posicao) {
  rl.question(`Digite o ${posicao}º número: `, function (input) {
    const numero = parseFloat(input);
    numeros.push(numero);

    if (numeros.length < 5) {
      solicitarNumero(numeros.length + 1);
    } else {
      calcularSoma();
      rl.close();
    }
  });
}

function calcularSoma() {
  let soma = 0;
  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }
  console.log(`A soma total dos números é: ${soma}`);
}

solicitarNumero(1);
