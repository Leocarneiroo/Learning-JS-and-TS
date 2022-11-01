// funções construtoras
// sempre começa o nome da função com letra Maiuscula -> Pessoa (new)

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p1 = new Pessoa('Luiz', 'Otavio');
const p2 = new Pessoa ('Maria', 'Oliveira');