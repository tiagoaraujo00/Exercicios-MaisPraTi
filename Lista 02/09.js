// 9. Contabilizando Elementos com uma Condição ○ Objetivo: Crie um array de objetos clientes, cada um com propriedades nome, idade, e cidade. Use forEach para contar quantos clientes têm mais de 30 anos.

const clientes = [
    {
        nome: 'João',
        idade: 25,
        cidade: 'São Paulo'
    },
    {
        nome: 'Maria',
        idade: 35,
        cidade: 'Rio de Janeiro'
    },
    {
        nome: 'José',
        idade: 40,
        cidade: 'Curitiba'
    }
];

let cont = 0;

clientes.forEach(cliente => {
    if (cliente.idade > 30) {
        cont++;
    }
});

console.log(cont);