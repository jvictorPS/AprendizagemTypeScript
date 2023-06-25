let usuarios: Usuario[] = []

interface Usuario {
    id: number
    login: string
    nome: string
    bio: string
    repos_public: number
    repos_url: string
}

interface RepositorioUser {
    name: string
    description: string
    fork: boolean
    stargazers_count: number
}

async function salvarUsuario(usuario: string): Promise<void> {
    try {
        const response = await fetch(`https://api.github.com/users/${usuario}`)
        const data = await response.json()
        
        if (data.message === "Not Found") {
            throw new Error('Usuario não encontrado')
        }

        let user: Usuario = {
            id: data.id,
            login: data.login,
            nome: data.name,
            bio: data.bio,
            repos_public: data.public_repos,
            repos_url: data.repos_url
        }

        usuarios.push(user)

        console.log(usuarios)

    }   catch (erro) {
        console.log(erro.message)
    }
}

async function exibirUsuario(usuario: string): Promise<void> {
    const usuarioParaExibir: Usuario | undefined = usuarios.find((u) => u.login === usuario)

    if (usuarioParaExibir) {
        const response = await fetch(usuarioParaExibir.repos_url)
        const data: Array<any> = await response.json()
        let listaRepositoriosTratada: Array<RepositorioUser> = []

        data.slice(0, 3).map((r: RepositorioUser) => {
        listaRepositoriosTratada.push({
            name: r.name,
            description: r.description,
            fork: r.fork,
            stargazers_count: r.stargazers_count,
        })
        })

        let listaInformacoesUsuario: string = 
        `
        id: ${usuarioParaExibir.id}
        Nome: ${usuarioParaExibir.nome}
        Login: ${usuarioParaExibir.login}
        Repositórios publicos: ${usuarioParaExibir.repos_public}

        Amostra repositórios:


        `

        listaRepositoriosTratada.forEach((r) => {
            listaInformacoesUsuario += 
            `
            Nome: ${r.name}
            Descrição: ${r.description}
            Fork: ${r.fork}
            Estrelas: ${r.stargazers_count}
            `
        })

        console.log(listaInformacoesUsuario)
    } else {
        console.log("Usuário não encontrado.")
    }
}

function listarUsuarios(): void {

    let lista: string = ''

    usuarios.forEach((u) => {
        lista += `- ${u.login} \n`
    })

    console.log(lista)
}

function totalDeRepositorios(): void {
    let totalRepositorios: number = usuarios.reduce((acumulador , u) => acumulador + u.repos_public , 0)

    console.log(`Total de repositorios: ${totalRepositorios}`)
}

function topCinco() {
    usuarios.sort((a , b) => b.repos_public - a.repos_public)
    let lista: string = ''
    let i = 1

        usuarios.forEach((u) => {
            if ( i <= 5) {
                lista += `${i}° ${u.login} - ${u.repos_public} reposit\n`
                i ++
            }
        })

    console.log(lista)
}