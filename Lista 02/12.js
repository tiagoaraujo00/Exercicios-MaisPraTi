// 12. Atualizando um Array de Objetos ○ Objetivo: Crie um array de objetos estoque, onde cada objeto tem produto, quantidade e minimo. Use forEach para atualizar a quantidade dos produtos que estão abaixo do mínimo, duplicando suas quantidades.


const estoque = [
    {
        produto: 'Camiseta',
        quantidade: 10,
        minimo: 20
    },
    {
        produto: 'Calça',
        quantidade: 5,
        minimo: 10
    },
    {
        produto: 'Tênis',
        quantidade: 2,
        minimo: 5
    }
];

estoque.forEach(produto => {
    if (produto.quantidade < produto.minimo) {
        produto.quantidade *= 2;
    }
});

console.log(estoque);