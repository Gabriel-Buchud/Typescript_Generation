import { Queue } from "../interfaces/Queue";

const fila = new Queue<number>();

for (let i = 1; i <= 10; i++){
  fila.enqueue(i)
}

// Exibe a fila
console.log("\nExibir todos os Elementos da fila: ");

fila.printQueue();

// Apaga o primeiro elemento da fila
console.log("\nRemover Elemento: " + fila.dequeue());

fila.printQueue();

console.log("\nExibir o primeiro Elemento da fila: " + fila.peek());

console.log("\nChecar se o Elemento 4 existe na fila: " + fila.contains(4));

// limpa toda a fila
fila.clear();

// Checa se a fila está vazia ou não retornando valor booleano
console.log("\nA fila está vazia? " + fila.isEmpty());