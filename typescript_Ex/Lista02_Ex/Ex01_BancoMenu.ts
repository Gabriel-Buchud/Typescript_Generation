
import { Queue } from "../../interfaces/Queue";

const leia = require('readline-sync');

const fila = new Queue<string>();

let loop = true;
let opcao;
let nome: string;

console.log("\n|***************************** MENU *****************************|");
console.log("\n1 : Adicionar um novo cliente na fila");
console.log("2 : Listar os clientes na fila");
console.log("3 : Chamar (retirar) um cliente da fila");
console.log("0 : Finalizar o programa");

while (loop) {

  console.log("\n|***************** Digite Uma das opcoes abaixo *****************|");
  opcao = leia.questionInt("\nDigite uma das opcoes acima: ");

  switch (opcao) {
    case 1:

      nome = leia.question("Digite o nome: ");
      fila.enqueue(nome);
      console.log("\nFila:");
      fila.printQueue();
      console.log("\nCliente Adicionado!");
      break;

    case 2:

      console.log("Listar os clientes na fila:");
      if (!fila.isEmpty()) {
        fila.printQueue();
      } else {
        console.log("A Fila está vazia!");
      }
      break;

    case 3:

      if (fila.isEmpty()) {
        console.log("A Fila está vazia!");
      } else {
        const chamado = fila.dequeue();
        console.log("\nFila:");
        fila.printQueue();
        console.log(`\nO Cliente ${chamado} foi Chamado!`);
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
