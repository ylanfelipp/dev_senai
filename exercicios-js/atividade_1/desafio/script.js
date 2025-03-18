const produtos = [
    { nome: "Produto 1", preco: 100 }, 
    { nome: "Produto 2", preco: 200 }, 
    { nome: "Produto 3", preco: 300 }
]

const precosProdutosComDesconto = produtos.map(p => p.preco * (1 - 0.1))
console.log(precosProdutosComDesconto)
