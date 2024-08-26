// Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solicitarNumero = () => {
  rl.question("Digite um número inteiro: ", function (input) {
    const numero = parseInt(input);
    if (numero < 0) {
      console.log("O número deve ser maior ou igual a 0.");
      solicitarNumero();
    } else {
      calcularFatorial(numero);
      rl.close();
    }
  });
};

const calcularFatorial = (numero) => {
  let fatorial = 1;
  for (let i = 1; i <= numero; i++) {
    fatorial *= i;
  }
  console.log(`O fatorial de ${numero} é: ${fatorial}`);
};

solicitarNumero();
