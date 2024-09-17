// 8. Criando Novos Arrays a Partir de Objetos ○ Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo, diretor, e anoLancamento. Use forEach para criar um novo array contendo apenas os títulos dos filmes.

const filmes = [
    {
        titulo: 'Matrix',
        diretor: 'Lana Wachowski',
        anoLancamento: 1999
    },
    {
        titulo: 'O Senhor dos Anéis',
        diretor: 'Peter Jackson',
        anoLancamento: 2001.
    },
]

const titulos = [];

filmes.forEach(filme => {
    titulos.push(filme.titulo);
});

console.log(titulos);