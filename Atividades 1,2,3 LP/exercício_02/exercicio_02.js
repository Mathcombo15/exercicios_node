const prompt = require("prompt-sync")();

// Entrada de dados
console.log("Para alcançar o resultado desejado, digite dois números:");
let numero1 = Number(prompt("- Digite o primeiro número:"));
let numero2 = Number(prompt("- Digite o segundo número:"));
// processamento de dados
let media = (numero1 + numero2) / 2;
// Saída de dados
console.log("A média calculada é:" + media);