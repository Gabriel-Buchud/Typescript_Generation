import readlinesync = require("readline-sync")

let numero1: number;
let numero2: number;

numero1 = readlinesync.questionFloat("Digite o primeiro numero: ")
numero2 = readlinesync.questionFloat("Digite o segundo numero: ")

console.log(`Soma ${numero1} + ${numero2} = ${numero1 + numero2}`);
console.log(`Subtracao ${numero1} - ${numero2} = ${numero1 - numero2}`);
console.log(`Multiplicacao ${numero1} * ${numero2} = ${numero1 * numero2}`);
console.log(`Divisao ${numero1} / ${numero2} = ${numero1 / numero2}`);