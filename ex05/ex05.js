let contador = document.getElementById('contador')
const btnAdicionar = document.getElementById('adicionar')
const btnSubtrair = document.getElementById('subtrair')
const btnZerar = document.getElementById('zerar')

btnAdicionar.onclick = adicionar
btnSubtrair.onclick = subtrair
btnZerar.onclick = zerar

let i=0;

function adicionar(){
i++ 
contador.innerHTML = `${i}` 
}
function subtrair(){
    i--
    contador.innerHTML=`${i}`
}
function zerar(){
    i=0
    contador.innerHTML=`${i}`
}

