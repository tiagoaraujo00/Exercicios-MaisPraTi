// 6. Filtrando Arrays de Objetos ○ Objetivo: Crie um array de objetos funcionarios, onde cada objeto contém informações como nome, cargo, e salario. Use for of para filtrar e exibir apenas os funcionários cujo salário seja maior que um valor específico.

const funcionarios = [
    {
        nome: 'João',
        cargo: 'Analista de Sistemas',
        salario: 5000
    },
    {
        nome: 'Maria',
        cargo: 'Gerente de Projetos',
        salario: 8000
    },
    {
        nome: 'José',
        cargo: 'Desenvolvedor Front-End',
        salario: 6000
    }
];

for (let funcionario of funcionarios) {
    if (funcionario.salario > 6000) {
        console.log(funcionario);
    }
}