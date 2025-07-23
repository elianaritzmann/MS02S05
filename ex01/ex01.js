const produtos = [
  { nome: "Mouse", preco: 50 },
  { nome: "Teclado", preco: 100 },
];

produtos.forEach(element => {
   document.getElementById('produtos').innerHTML += `<div><h3>Nome: ${element.nome}</h3><p> Preço: ${element.preco} </div>`
    
});