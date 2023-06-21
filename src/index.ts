let naves = []

function cadastrarNave(): void {
    let nave = {
        nome: prompt('Qual o nome da nave'),
        piloto: prompt('Qual o nome do piloto?'),
        limiteTripulação: Number(prompt('Qual a tripulação máxima?')),
        tripulacaoAtual: [] as string[],
        emMissao: false
    }

    naves.push(nave)

}

function adicionaTripulante() {
    
}