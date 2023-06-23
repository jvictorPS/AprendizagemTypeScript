let planetas: Array<Planeta> = []
let cod: number = 0

type Situacao = 'habitado' | 'habiável' | 'inabitável' | 'inexplorado'


interface Planeta {
    cod: number,
    nome: string,
    coordenadas: [number , number , number , number]
    situacao: Situacao
    satelites: string[]
}

function cadastrarPlaneta() {

}
