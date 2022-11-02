//método splice

const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];

//nomes.splice(índice, delete, elem1, elem2, elem3);
const removidos = nomes.splice(4, 1, 'Luiz');

console.log(nomes, removidos);
