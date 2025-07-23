const menu = ["Home", "Sobre", "Contato"]

for(let item of menu){
    document.getElementById('menu').innerHTML+=`<nav> ${item}</nav>`
}