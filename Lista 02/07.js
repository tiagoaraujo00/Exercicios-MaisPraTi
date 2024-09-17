//7. Modificando Objetos em um Array ○ Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome, preco, e desconto. Use forEach para aplicar um desconto de 10% em todos os produtos e exibir o novo preço.

const produtos = [
    {
        nome: 'Camiseta',
        preco: 30,
        desconto: 10
    },
    {
        nome: 'Calça',
        preco: 50,
        desconto: 10
    },
    {
        nome: 'Tênis',
        preco: 100,
        desconto: 10
    }
];

produtos.forEach(produto => {
    produto.preco -= produto.preco * (produto.desconto / 100);
    console.log(produto.preco);
});