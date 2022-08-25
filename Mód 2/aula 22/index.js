/*
Operadores lógicos

&& -> AND
|| -> OR
! -> NOT

*/

console.log(true && true && true && true);
// neste caso a operação será verdadeira pq todas são verdadeiras

console.log( true || false || false || false);
// neste caso sera verdadeiro tbm pq o || simboliza uma OU outra seja verdadeira


// exemplo de uso 

const usuario = 'Luiz';
const senha = '123456';

const vaiLogar = usuario === 'Luiz' && senha === '123456';
console.log(vaiLogar);
