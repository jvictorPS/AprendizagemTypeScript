// tipos literais, com eles podemos atribuir um valor especifico permitido para a variavel:

let minhaVariavelLiteral: "Olá!"    // essa variavel só poderá receber uma string "Olá"
let outroExemplo: 5                 // essa variavel só poderá receber um number 5


// por exemplo, uma "const" é considerada um literal pelo TS


// posso usar essa barra para funcionar como um operador "ou" |


let opção: "yes" | "no" | "etc"     // essa variavel só pode receber yes, no ou etc
let exemplo: number | string       // vai poder receber valores do tipo number ou string


//=========================================================================================================

// temos os Alias, para não ficarmos repetindo toda vez um determinado conjunto de tipos, 
//podemos atribuir um nome a esse conjunto:

type Planet = "Mercúrio" | "Vênus" | "Terra" | "Marte" | "Júpiter" | "Saturno" | "Urano" | "Netuno" | "Plutão"

//tenho então um conjunto de tipos que denominei de "Planet"

let meusPlanetas: Planet    // agora minha variavel só pode receber esse conjunto de valores sem eu ter que repetir eles aqui

let sistemaSolar: Planet

function planeta( planetas: Planet) {
    //....
}