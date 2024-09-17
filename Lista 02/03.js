// 3. Filtrando Propriedades de Objetos ○ Objetivo: Dado um objeto produto com várias propriedades, crie uma função que retorna um novo objeto contendo apenas as propriedades cujo valor seja maior que um valor específico. Use for in para filtrar as propriedades.

const produto = {
    nome: 'Notebook',
    preco: 3000,
    marca: 'Dell',
    processador: 'Intel Core i5',
}

const filtrarPropriedades = (obj, valor) => {
    const novoObj = {};

    for (let prop in obj) {
        if (obj[prop] > valor) {
            novoObj[prop] = obj[prop];
        }
    }

    return novoObj;
}

console.log(filtrarPropriedades(produto, 2000));