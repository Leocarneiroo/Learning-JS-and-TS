// Declaração de função

function falaOi() {
    console.log('Oi');
}

falaOi();

// First-class objects (objetos de primeira classe)
// Function Expression

const souUmDado = function nomeDaFuncao() {
    console.log('Sou um dado');
};

souUmDado();

// Arrow function

const funcaoArrow = () => {
    console.log('Sou uma arrow funciton');
}
funcaoArrow();

// dentro de um onjeto
const obj = {
    falar: function() {
        console.log('Estou falando...')
    }
};
obj.falar();