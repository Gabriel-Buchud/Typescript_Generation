import readlinesync = require("readline-sync");

const numeros: Array<number> = new Array<number>();

numeros.push(7);
numeros.push(5);
numeros.push(1);
numeros.push(7);

//numeros.push(readlinesync.questionFloat("Digite um numero: "))

numeros.unshift(2.5, 3.7, 8);

// for (of) só funciona com estrutura de dados
for(let numero of numeros)
  console.log(numero);

//método indexOf vai direto ao array selecionado sem precisar percorrer toda a estrutura.
console.log(`\nA posicao do elemnto 5 é: ${numeros.indexOf(5)}`)

// Método booleano que indica se um elemento existe ou não no array.
console.log(`\nExiste o elemnto 5 no Array?: ${numeros.includes(5)}`)

// Podemos atribuir valores na posição desejada atravéz do método indexOf
// Atualização de valor
numeros[numeros.indexOf(5)] = 10;

// o método splice serve para apagar e indexar valores no meio de um array
// o (,1) serve para apagar apenas 1 valor ou o primeiro valor encontrado dentro do array
numeros.splice(numeros.indexOf(10),1);