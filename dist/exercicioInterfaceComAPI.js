var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let usuarios = [];
function salvarUsuario(usuario) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`https://api.github.com/users/${usuario}`);
            const data = yield response.json();
            if (data.message === "Not Found") {
                throw new Error('Usuario não encontrado');
            }
            let user = {
                id: data.id,
                login: data.login,
                nome: data.name,
                bio: data.bio,
                repos_public: data.public_repos,
                repos_url: data.repos_url
            };
            usuarios.push(user);
            console.log(usuarios);
        }
        catch (erro) {
            console.log(erro.message);
        }
    });
}
function exibirUsuario(usuario) {
    return __awaiter(this, void 0, void 0, function* () {
        const usuarioParaExibir = usuarios.find((u) => u.login === usuario);
        if (usuarioParaExibir) {
            const response = yield fetch(usuarioParaExibir.repos_url);
            const data = yield response.json();
            let listaRepositoriosTratada = [];
            data.slice(0, 3).map((r) => {
                listaRepositoriosTratada.push({
                    name: r.name,
                    description: r.description,
                    fork: r.fork,
                    stargazers_count: r.stargazers_count,
                });
            });
            let listaInformacoesUsuario = `
        id: ${usuarioParaExibir.id}
        Nome: ${usuarioParaExibir.nome}
        Login: ${usuarioParaExibir.login}
        Repositórios publicos: ${usuarioParaExibir.repos_public}

        Amostra repositórios:


        `;
            listaRepositoriosTratada.forEach((r) => {
                listaInformacoesUsuario +=
                    `
            Nome: ${r.name}
            Descrição: ${r.description}
            Fork: ${r.fork}
            Estrelas: ${r.stargazers_count}
            `;
            });
            console.log(listaInformacoesUsuario);
        }
        else {
            console.log("Usuário não encontrado.");
        }
    });
}
function listarUsuarios() {
    let lista = '';
    usuarios.forEach((u) => {
        lista += `- ${u.login} \n`;
    });
    console.log(lista);
}
function totalDeRepositorios() {
    let totalRepositorios = usuarios.reduce((acumulador, u) => acumulador + u.repos_public, 0);
    console.log(`Total de repositorios: ${totalRepositorios}`);
}
function topCinco() {
    usuarios.sort((a, b) => b.repos_public - a.repos_public);
    let lista = '';
    let i = 1;
    usuarios.forEach((u) => {
        if (i <= 5) {
            lista += `${i}° ${u.login} - ${u.repos_public} reposit\n`;
            i++;
        }
    });
    console.log(lista);
}
