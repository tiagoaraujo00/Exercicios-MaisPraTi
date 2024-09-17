// 4. Iterando Sobre Arrays de Objetos ○ Objetivo: Crie um array de objetos pessoas, onde cada objeto representa uma pessoa com nome, idade, e cidade. Use for of para exibir as informações de cada pessoa no console.

const pessoas = [
    {
        nome: 'João',
        idade: 25,
        cidade: 'São Paulo'
    },
    {
        nome: 'Maria',
        idade: 30,
        cidade: 'Rio de Janeiro'
    },
    {
        nome: 'José',
        idade: 21,
        cidade: 'Curitiba'
    }
];

for (let pessoa of pessoas) {
    console.log(pessoa);
}