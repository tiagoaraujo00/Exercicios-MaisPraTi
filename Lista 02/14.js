// 14. Manipulando Objetos Complexos ○ Objetivo: Crie um objeto empresa com uma propriedade departamentos, que é um array de objetos. Cada departamento tem um nome e uma lista de funcionarios. Use for in e for of para iterar sobre os departamentos e seus funcionários, exibindo o nome de cada funcionário junto com o depatamento ao qual pertence.

const empresa = {
  departamentos: [
    {
      nome: "Vendas",
      funcionarios: ["João", "Maria"],
    },
    {
      nome: "RH",
      funcionarios: ["José", "Pedro"],
    },
  ],
};

for (let dep in empresa.departamentos) {
  console.log(empresa.departamentos[dep].nome);
  for (let func of empresa.departamentos[dep].funcionarios) {
    console.log(func);
  }
}
