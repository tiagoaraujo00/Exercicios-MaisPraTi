// 2. Verificando Propriedades ○ Objetivo: Crie um objeto livro com propriedades titulo, autor, anoPublicacao e genero. Verifique se a propriedade editora existe no objeto usando for in. Se não existir, adicione essa propriedade ao objeto.

const livro = {
    titulo: 'O Senhor dos Anéis',
    autor: 'J.R.R. Tolkien',
    anoPublicacao: 1954,
    genero: 'Fantasia'
}

if (!livro.editora) {
    livro.editora = 'HarperCollins';
}

console.log(livro);