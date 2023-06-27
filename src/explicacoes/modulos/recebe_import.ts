import { usuario } from "./tipo_modelo"


//nem todas as bibliotecas foram feitas inicialmente com JS
//nesses casos, precisamos instalar elas usando o comando:
//npm i --save-dev @type/lodash
//caso exista uma extensão para essa biblioteca para
//comportar os types do TS, então ela será instalada
import * as qualquerNome from "lodash"


interface UserAdministrador extends usuario {
    key: number
}

let user: UserAdministrador

user.clt
user.key