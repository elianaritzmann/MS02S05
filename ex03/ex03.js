const tarefa = document.getElementById('tarefa')
const botao = document.getElementById('btn')

botao.onclick = adicionarTarefa;

function adicionarTarefa(){
    document.getElementById('lista').innerHTML += `<p>${tarefa.value}</p>`
}