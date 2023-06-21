// existem algumas formas de evitarmos a tipagem do TS

//usando "?" :

function testandoInterrogacao(primeiro: string , segundo?: number) {
    //...
}

testandoInterrogacao( 'casa') // com a interrogação o argumento deixa de ser obrigatorio.

// --------------------------------------------------------------------------------------------------------------

// usando "unknow" = "não sabe qual variavel vai ser"

let testandoUnknow: unknown

testandoUnknow = 'teste'
testandoUnknow = 8
testandoUnknow = true

let testandoTipada: number

'testandoTipada = testandoUnknow' // se eu tentar atribuir testandoUnknow em testandoTipada vai dar erro, pq testandoTipada não sabe se vai vim uma 'string' para ela

// --------------------------------------------------------------------------------------------------------------

let testeAny: any

testandoUnknow = 'teste'
testandoUnknow = 8
testandoUnknow = true

let Teste2: number

Teste2 = testeAny // diferente do unknow, nesse caso vai funcionar pq o "any" desabilita toda a verificação do TS

// --------------------------------------------------------------------------------------------------------------

// usando "never"
// usado para casos que nunca deveriam existir


function testeNever(test) {
    if (test) {

    } else {
        let _check: never

        let texto = _check

        "texto = '' "    // se eu tentar atribuir um valor para essa variavel vai dar erro, pois ela nunca deveria existir
    }
}