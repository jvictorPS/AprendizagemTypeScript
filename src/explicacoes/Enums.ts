//Enums são uma forma de enumerar valores

enum Planetas {
    terra,
    marte,
    mercurio,
    jupiter
}

Planetas.marte //isso aqui representa o numero "1"
Planetas.jupiter //isso aqui representa o numero "3"



// podemos também mudar a forma que esses valores são contados:

enum usuariosPerfil {
    adm = 5,
    Usuario,
    Tecnico
}

// agora a cotagem começa a partir do 5

usuariosPerfil.adm    // isso representa "5"