// Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showMenu() {
    console.log("\nEscolha uma opção:");
    console.log("1. Dizer Olá");
    console.log("2. Mostrar a data atual");
    console.log("3. Sair");

    rl.question("Digite o número da sua escolha: ", function(choice) {
        switch (choice) {
            case '1':
                console.log("Olá! Espero que você esteja bem.");
                break;
            case '2':
                console.log(`A data e hora atual é: ${new Date()}`);
                break;
            case '3':
                console.log("Saindo...");
                rl.close();
                return;
            default:
                console.log("Opção inválida.");
                break;
        }
        showMenu(); // Exibe o menu novamente após a escolha
    });
}

showMenu();

