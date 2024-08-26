// Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.

const altura = 1.75;
const peso = 70;

const imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log('Baixo peso');
} else if (imc >= 18.5 && imc < 24.9) {
    console.log('Peso normal');
} else if (imc >= 24.9 && imc < 29.9) {
    console.log('Sobrepeso');
} else {
    console.log('Obesidade');
}
