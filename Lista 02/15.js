// 15. Filtrando e Somando Valores ○ Objetivo: Crie um array de objetos transacoes, onde cada transação tem tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final, somando as entradas e subtraindo as saídas.

const transacoes = [
  {
    tipo: "entrada",
    valor: 50,
  },
  {
    tipo: "saida",
    valor: 20,
  },
  {
    tipo: "entrada",
    valor: 100,
  },
  {
    tipo: "saida",
    valor: 15,
  },
];


let saldo = 0;

transacoes.forEach(transacao => {
  const { tipo, valor } = transacao;
  saldo += tipo === 'entrada' ? valor : -valor;
  });

console.log(saldo);