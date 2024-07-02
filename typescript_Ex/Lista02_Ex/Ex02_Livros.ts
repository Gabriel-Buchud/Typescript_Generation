import { Stack } from "../../interfaces/Stack";
const leia = require('readline-sync');

const pilha = new Stack<string>();
let loop = true;
let nome: string;

console.log("\n|***************************** MENU *****************************|");
console.log("\n1 : Adicionar um novo livro na fila");
console.log("2 : Listar os livros na fila");
console.log("3 : Chamar (retirar) um livro da fila");
console.log("0 : Finalizar o programa");

while (loop) {
  console.log("\n|***************** Digite Uma das opcoes acima *****************|");
  const opcao = leia.questionInt("\nOpcao escolhida: ");

  switch (opcao) {
    case 1:
      nome = leia.question("Digite o nome: ");
      pilha.push(nome);
      console.log("\nLivro Adicionado!");
      break;

    case 2:
      console.log("Listar os livros na fila:");
      if (!pilha.isEmpty()) {
        pilha.printStack();
      } else {
        console.log("A Fila está vazia!");
      }
      break;

    case 3:
      if (pilha.isEmpty()) {
        console.log("A Fila está vazia!");
      } else {
        const chamado = pilha.pop();
        console.log(`\nO Livro ${chamado} foi lido!`);
      }
      break;

    case 0:
      loop = false;
      console.log("Programa Finalizado!");
      break;

    default:
      console.log("Opção inválida, digite uma das opções acima.");
      break;
  }
}
