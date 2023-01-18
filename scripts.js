let input = document.getElementById("input-principal")
let botao = document.getElementById("botao-adicionar")
let listaCompleta = document.getElementById("tarefas")

let arrayDeTarefas = []

function mostrarNaTela(){
    let novaLista = " "

    arrayDeTarefas.forEach( tarefa => {
        
        novaLista = novaLista + `
            <li class="item-tarefa">
                <p >${tarefa}</p>
            </li>
        `
    })

    listaCompleta.innerHTML = novaLista
}

function cliqueiNoBotao(){
    arrayDeTarefas.push(input.value)
    mostrarNaTela()
}


botao.addEventListener("click", cliqueiNoBotao)