// 1. Acessando Propriedades de Objetos ○ Objetivo: Crie um objeto carro com propriedades como marca, modelo, ano, e cor. Use for in para iterar sobre as propriedades e exibir seus valores no console.

const carro = {
    marca: 'Fiat',
    modelo: 'Uno',
    ano: 2020,
    cor: 'branco'
}

for (let prop in carro) {
    console.log(carro[prop]);
}