// 11. Agrupando Elementos com forEach ○ Objetivo: Crie um array de objetos pedidos, onde cada pedido tem cliente, produto, e quantidade. Use forEach para criar um objeto que agrupa a quantidade total de produtos por cliente.

const pedidos = [
  {
    cliente: "João",
    produto: "Camiseta",
    quantidade: 10,
  },
  {
    cliente: "Maria",
    produto: "Calça",
    quantidade: 5,
  },
  {
    cliente: "João",
    produto: "Tênis",
    quantidade: 2,
  },
];

const relatorio = {};

pedidos.forEach((pedido) => {
  if (!relatorio[pedido.cliente]) {
    relatorio[pedido.cliente] = 0;
  }

  relatorio[pedido.cliente] += pedido.quantidade;
});

console.log(relatorio);
