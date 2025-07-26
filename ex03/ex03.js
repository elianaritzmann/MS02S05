const tarefa = document.getElementById('tarefa')
const botao = document.getElementById('btn')
const lista = document.getElementById('lista')

if(localStorage.length>0){
    for (let i = 0; i < localStorage.length; i++) {
    const chave = localStorage.key(i);
    const valor = localStorage.getItem(chave);
    lista.innerHTML += `<p>${valor}</p>`
  } 
}

botao.onclick = adicionarTarefa;
let contador = 1
function adicionarTarefa(){
    const novaTarefa = tarefa.value
    const tarefaDiv = document.createElement('div')
    const tarefaP = document.createElement('p')
    tarefaP.textContent = novaTarefa;

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent= 'Excluir'

    const key = `tarefa ${contador}`
    localStorage.setItem(key,novaTarefa)

    deleteBtn.onclick = () => {
        localStorage.removeItem(key)
        tarefaDiv.remove()


    }
    lista.appendChild(tarefaDiv)
    tarefaDiv.appendChild(tarefaP)
    tarefaDiv.appendChild(deleteBtn)

    contador ++
}