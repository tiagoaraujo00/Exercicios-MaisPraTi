// Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function verificarTriangulo(A, B, C) {
    if (A + B > C && A + C > B && B + C > A) {
        console.log("Os lados fornecidos formam um triângulo.");

        if (A === B && B === C) {
            console.log("Tipo de triângulo: Equilátero");
        } else if (A === B || A === C || B === C) {
            console.log("Tipo de triângulo: Isósceles");
        } else {
            console.log("Tipo de triângulo: Escaleno");
        }
    } else {
        console.log("Os lados fornecidos não formam um triângulo.");
    }
}


rl.question('Digite o lado A: ', function(inputA) {
    const A = parseFloat(inputA);

    rl.question('Digite o lado B: ', function(inputB) {
        const B = parseFloat(inputB);

        rl.question('Digite o lado C: ', function(inputC) {
            const C = parseFloat(inputC);

            verificarTriangulo(A, B, C);

            rl.close(); 
        });
    });
});
