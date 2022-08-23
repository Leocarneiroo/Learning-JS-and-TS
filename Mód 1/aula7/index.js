/*
- São similares a variaveis let
- mas nao podem se inicializadas depois como o let
- constantes não podem ser modificadas
*/

const nome ='João';
console.log(nome);

const pNumero = 5;
const sNumero = 10;
const resultado = pNumero * sNumero;
const resultaDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;

// o let acaba recebendo outros valores na variável.