let planetas = [];
let cod = 0;
function cadastrarPlaneta() {
    let nome = prompt('Qual o nome do planeta?');
    let coordenadas;
    for (let i = 0; i < 4; i++) {
        let coordenada = Number(prompt(`Qual a ${i + 1}° coordenada?`));
        coordenadas.push(coordenada);
    }
    //let situacao: Situacao = prompt("Escolha (habitado, habiável, inabitável, inexplorado)")
    let planeta = {
        nome: nome,
        coordenadas: coordenadas,
        //situacao: situacao,
    };
}
cadastrarPlaneta();
