export class User {

    nombre: string;
    apellidos: string;
    edad: number;
    usuario: string;
    email: string;
    password: string;
    partida: number;
    destino: number;
    hora: string;

    constructor(pNombre, pApellidos, pEdad, pUsuario, pEmail, pPassword, pPartida, pDestino, pHora) {

        this.nombre = pNombre;
        this.apellidos = pApellidos;
        this.edad = pEdad;
        this.email = pEmail;
        this.usuario = pUsuario;
        this.password = pPassword;
        this.partida = pPartida;
        this.destino = pDestino;
        this.hora = pHora;

    }

}