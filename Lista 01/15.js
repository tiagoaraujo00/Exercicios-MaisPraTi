// Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.

const fibonacci = (n) => {
  let a = 0;
  let b = 1;
  let c = 0;
  for (let i = 0; i < n; i++) {
    console.log(a);
    c = a + b;
    a = b;
    b = c;
  }
}

fibonacci(10);