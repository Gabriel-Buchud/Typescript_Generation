import readlinesync = require("readline-sync");

// A collection Set não aceita valor repetindo, sempre ignorando os proximos valores repetidos.
// Collection Set não existe indice, ou seja, não é indexada.
const frutas: Set<string> = new Set<string>();

frutas.add("kiwi");
frutas.add("caqui");
frutas.add("manga");
frutas.add("kiwi");

console.table(frutas);

// O método .has retorna true ou false 
console.log(`\nA fruta Caqui existe? ${frutas.has("caqui")}`);

// Deleta dados
frutas.delete("caqui");

console.table(frutas);