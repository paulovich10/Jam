export class User {

    nombre: string;
    apellidos: string;
    fecha_nacimiento: Date;
    usuario: string;
    email: string;
    password: string;
    partida: number;
    destino: number;
    hora: string;

    constructor(pNombre, pApellidos, pFechanacimiento, pUsuario, pEmail, pPassword, pPartida, pDestino, pHora) {

        this.nombre = pNombre;
        this.apellidos = pApellidos;
        this.fecha_nacimiento = pFechanacimiento;
        this.email = pEmail;
        this.usuario = pUsuario;
        this.password = pPassword;
        this.partida = pPartida;
        this.destino = pDestino;
        this.hora = pHora;

    }

}