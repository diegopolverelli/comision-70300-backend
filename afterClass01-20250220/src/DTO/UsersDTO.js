export class UsersDTO{
    constructor(usuario){
        this.name=usuario.nombre
        this.email=usuario.email
        this.role=usuario.rol
    }
}