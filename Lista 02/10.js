// 10. Criando Relatórios com Objetos e Arrays ○ Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto, quantidade e valor. Use forEach para calcular o valor total de vendas de todos os produtos.

const vendas = [
    {
        produto: 'Camiseta',
        quantidade: 10,
        valor: 30
    },
    {
        produto: 'Calça',
        quantidade: 5,
        valor: 50
    },
    {
        produto: 'Tênis',
        quantidade: 2,
        valor: 100
    }
];

let total = 0;

vendas.forEach(venda => {
    total += venda.quantidade * venda.valor;
});

console.log(total);