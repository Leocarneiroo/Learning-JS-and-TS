
const inputTarefa = document.querySelector('.input-tarefa');
const addTarefa = document.querySelector('.add-tarefa');
const tarefa = document.querySelector('.tarefa');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefa.appendChild(li);
    limpaInput();
    criaBotaoApagar(li)
    salvarTarefa();
}


addTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(e) {
    const el = e.target;

    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefa();
    }
})

function salvarTarefa() {
    const liTarefas = tarefa.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefas of liTarefas) {
        let tarefasTexto = tarefas.innerText;
        tarefasTexto = tarefasTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefasTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefa', tarefasJSON);
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefa');
    const listaDeTarefas = JSON.parse(tarefas);

    for(let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas();