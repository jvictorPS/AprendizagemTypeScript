let naves: Array<Nave> = []
let id: number = 0

interface Nave {
    id: number,
    nome: string,
    piloto: string,
    limiteTripulação: number,
    tripulacaoAtual: string[],
    emMissao: boolean
}

executar()

function executar() {
    let opcao = ""

    do {
        opcao = mostrarMenu()

        switch (opcao) {
            case '1':
                cadastrarNave()
                break
            case '2':
                adicionaTripulante()
                break
            case '3':
                enviarNave()
                break
            case '4':
                exibirNaves()
                break
            case '0':
                alert('Encerrando...')
                break
            default:
                alert('Opção invalida. Tente novamente.')
        }
    } while (opcao !== '0')
}

function mostrarMenu(): string {
    return prompt
        (
        'Escolha a ação desejada:\n\n' + 
        '1 - Cadastrar nova nave\n' +
        '2 - Adicionar tripulante\n' +
        '3 - Enviar uma nave para missão\n' +
        '4 - Exibir naves\n' +
        '0 - Sair'
         )
}

function cadastrarNave(): void {

    let nave: Nave = {
        id: id,
        nome: prompt('Qual o nome da nave'),
        piloto: prompt('Qual o nome do piloto?'),
        limiteTripulação: Number(prompt('Qual a tripulação máxima?')),
        tripulacaoAtual: [],
        emMissao: false
    }

    naves.push(nave)

    id += 1
}

function adicionaTripulante(): void {

    if(naves.length === 0) {
        exibirNaves()

        return
    }

    let tripulanteNovoId: number = Number(prompt(`${listarNaves()} \n\n Qual o ID da nave que você que adicionar o tripulante?`))

    if (tripulanteNovoId > naves.length || tripulanteNovoId < 0 || naves.length === 0) { return alert('ID não existe')}

    if (naves[tripulanteNovoId].tripulacaoAtual.length <= naves[tripulanteNovoId].limiteTripulação) {
        let tripulanteNovoNome: string = prompt('Qual o nome do tripulante?')

        naves[tripulanteNovoId].tripulacaoAtual.push(tripulanteNovoNome)
    } else {
        alert('Nave com tripulação completa!')
    }

}

function enviarNave(): void {

    if(naves.length === 0) {
        exibirNaves()

        return
    }

    let naveParaEnviar: number = Number(prompt(`${listarNaves()} \n\n Qual o ID da nave que você deseja enviar?`))
    let tripulacaoParaliberacao = Math.floor((naves[naveParaEnviar].limiteTripulação) / 3)

    if (naves[naveParaEnviar].emMissao) {
        return alert('Nave já está em viagem')
    } else if (naves[naveParaEnviar].tripulacaoAtual.length < tripulacaoParaliberacao) {
        return alert('Nave sem tripulação suficiente')
    } else {
        naves[naveParaEnviar].emMissao = true

        alert('Nave enviada!')
    }
}

function listarNaves(): string {
    let lista = ""
    
    if(naves.length === 0) { 
        lista = "Sem naves cadastradas" 
        return lista
    }
    
    for (let i = 0; i < naves.length; i++) {
        lista += `ID: ${naves[i].id} - ${naves[i].nome}\n`
    }
    
    return lista
}

function exibirNaves(): void {
    
    let resultadoLista = listarNaves()

    alert(resultadoLista)
}
