//Enums são uma forma de enumerar valores
var Planetas;
(function (Planetas) {
    Planetas[Planetas["terra"] = 0] = "terra";
    Planetas[Planetas["marte"] = 1] = "marte";
    Planetas[Planetas["mercurio"] = 2] = "mercurio";
    Planetas[Planetas["jupiter"] = 3] = "jupiter";
})(Planetas || (Planetas = {}));
Planetas.marte; //isso aqui representa o numero "1"
Planetas.jupiter; //isso aqui representa o numero "3"
// podemos também mudar a forma que esses valores são contado:
var usuariosPerfil;
(function (usuariosPerfil) {
    usuariosPerfil[usuariosPerfil["adm"] = 5] = "adm";
    usuariosPerfil[usuariosPerfil["Usuario"] = 6] = "Usuario";
    usuariosPerfil[usuariosPerfil["Tecnico"] = 7] = "Tecnico";
})(usuariosPerfil || (usuariosPerfil = {}));
// agora a cotagem começa a parte do 5
usuariosPerfil.adm; // isso representa "5"
