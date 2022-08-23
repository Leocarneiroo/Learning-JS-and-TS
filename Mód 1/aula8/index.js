/*
Leonardo Carneiro tem 30 anos, pesa 80kg
tem 1.63 de altura e IMC de 30.1
Leonardo Carneiro nasceu em 1992
*/

const nome = 'Leonardo';
const sobrenome = 'Carneiro';
const idade = 30;
const peso = 80;
const alturaEmMetro = 1.63;
let imc = peso / (alturaEmMetro * alturaEmMetro); // peso / (altura * altura)
let anoNascimento = 2022 - idade;


console.log(nome, sobrenome, 'tem', idade, 'anos, e pesa', peso,'kg, tem', alturaEmMetro, 'de altura', 'e IMC de', imc, nome, sobrenome, 'nasceu em', anoNascimento, '.');

console.log(`${nome} ${sobrenome} tem ${idade} anos, e pesa ${peso} kg, tem ${alturaEmMetro} de altura e IMC de, ${imc}. ${nome} ${sobrenome} nasceu em ${anoNascimento}`)