const produto = {
    nome: 'Caneta Azul...',
    preco: 1.90,
    desconto: 0.05
}

function clone(obj) {
    return { ...obj }
}

const novoProduto = clone(produto)
novoProduto.nome = '...Azul Caneta'

console.log(produto, novoProduto);