// Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const numeros = [];

const solicitarNumero = () => {
  rl.question("Digite um número decimal: ", function (input) {
    const numero = parseFloat(input);
    if (numero === 0) {
      calcularMedia();
      rl.close();
    } else {
      numeros.push(numero);
      solicitarNumero();
    }
  });
};

const calcularMedia = () => {
  let soma = 0;
  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }
  const media = soma / numeros.length;
  console.log(`A média aritmética dos números é: ${media}`);
};

solicitarNumero();