/*
 - operadores aritméticos
  adição e concatenação = +
  menos = - 
  divisao = /
  multiplicacao = *
  potenciacao = **
  resto da divisao = %
*/

const  num1 =10;
const num2 = 5;
console.log(num1 % num2);

// lembrando que seguem as regras da matemática

console.log((num1 + num2)* num1);

// operador de incremento

let contador = 1;
contador ++; // valor do contador mais 1 que neste caso seria 2
console.log(contador);

// operador de decremento

contador --; // valor do contador menos 1

// exemplo de contador com passo

const passo = 50;
let cont = 0;
cont += passo; // neste caso fica => cont = cont + 50
// pode ser feito dessa maneira

let conta = 0;
conta += 2; // mesma lógica do de cima => conta + 2

// convertendo uma string em numero 

const n1 = 10;
const n2 = parseInt('5'); 
// se ele for 'float' neste caso ele vai ser oonvertido em inteiro
// caso for considerado numero com virgula tem que usar o parseFloat
// caso usar number ele considera numero inteiro ou float
console.log(num1 + num2);