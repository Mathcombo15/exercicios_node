const prompt = require('prompt-sync')();

// Entrada de dados
let numero1 = Number(prompt("Digite um número:"));
let numero2 = Number(prompt("Digite outro numero:"));

// Processamento de dados
let soma = numero1 + numero2;

// Saída de dados
console.log("Sua soma é :" + soma);
