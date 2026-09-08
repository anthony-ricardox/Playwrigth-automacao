//formas de tipar 
//forma 1

let idade:number;

const nome = "Zezo"

const sobrenome: string = "Ricardo"

type usuario = {'nick':string, 'age':number}

let jogador:usuario = {nick:'Toin', age: 20}

let jogadorVelho:usuario = {nick:'Rolliwaldo', age: 90}


function verificarIdade(usuarioAtual:usuario){
    if(usuarioAtual.age >= 18){
        console.log(`o jogador ${usuarioAtual.nick} tem ${usuarioAtual.age} anos\n acesso liberado para jogar`)
    }else{
        console.log(`jogador ${usuarioAtual.nick} tem ${usuarioAtual.age} \n anos e não tem idade suficiente para jogar`)
    }
}

verificarIdade(jogador)
verificarIdade(jogadorVelho)