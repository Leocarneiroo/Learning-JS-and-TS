// funções geradoras

function* geradora1() {
    // cod qualquer
    yield 'Valor 1';
    // cod qualquer
    yield 'Valor 2';
    // cod qualquer
    yield 'Valor 3';
}

const g1 = geradora1();
console.log(g1);
console.log(g1.next());
console.log(g1.next().value);
console.log(g1.next().value);