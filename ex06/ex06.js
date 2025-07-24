const email = document.getElementById('email')
const senha = document.getElementById('senha')

email.addEventListener('blur',validarEmail)
senha.addEventListener('blur',validarSenha)



function validarEmail(){
     if(!email.value.includes('@')){
         document.getElementById('erro').innerHTML += '<br>email invalido'
     }  erro.innerHTML = ` `
    
}
function validarSenha(){
   if(senha.value.length <=6){
     document.getElementById('erro').innerHTML += '<br>senha invalida'
     }else{
      erro.innerHTML = ` `
     }
   }
