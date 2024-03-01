const prompt = require("prompt-sync")();

// Entrada de dados
console.log("Para calcular a área  do retângulo, digite as medidas a seguir: ");
let altura = Number(prompt("Digite a altura:"));
let base = Number(prompt("Digite a base:"));
// Processamento de dados
let area = altura * base;
// Saída de dados
console.log("A área do retângulo é:" + area + "cm²");