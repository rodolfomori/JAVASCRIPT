/* 

    VARIÁVEIS
        - let / const / var ( descontinuado, não usamos mais)
           const -> Toda vez que eu crio uma variável com const, eu não posso atribuir um novo valor depois
           let -> Posso alterar o valor quantas vezes eu quiser

    IF (SE) / ELSE
        - Nos ajuda a ensinar o nosso código a tomar decisões
        if(condição, se for verdadeira){
            faz isso
        } else {
            se o if for falso, faço isso!
        }
    
    Funções
        - São um trecho de código, que só é executado, quando é chamado

    Laços
        - ForEach
*/

let produtos = ['blusa', 'tenis Nike', 'camiseta', 'shorts', 'meia'] // array ou matriz

produtos.forEach( produto => {

    if(produto === 'blusa'){
        console.log(produto)
    } 
})