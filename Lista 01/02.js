// Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.

const idade = 10;

if (idade < 13) {
    console.log('Criança');
}
else if (idade > 13 && idade < 18) {
    console.log('Adolescente');
}
else if (idade > 18 && idade < 60) {
    console.log('Adulto');
}
else {
    console.log('Idoso');
}
