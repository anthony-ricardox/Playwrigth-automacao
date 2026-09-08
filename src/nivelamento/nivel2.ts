
type pessoa = {'nome':string, 'idade':number}

let pessoa1:pessoa = {nome: "Maria", idade: 25}
let pessoa2:pessoa = {nome: "João", idade: 17}

function Bar(pessoaAtual:pessoa){
    return pessoaAtual.idade >= 18 ? console.log(`A pessoa ${pessoaAtual.nome} tem ${pessoaAtual.idade} anos e pode entrar no bar`) : console.log(`A pessoa ${pessoaAtual.nome} tem ${pessoaAtual.idade} anos e não pode entrar no bar`)
}
Bar(pessoa1)
Bar(pessoa2)