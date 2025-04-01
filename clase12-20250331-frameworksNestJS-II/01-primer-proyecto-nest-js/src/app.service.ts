import { BadRequestException, Injectable } from '@nestjs/common';
import { IsEmail, IsOptional, IsString, IsStrongPassword } from 'class-validator';

export interface UsuariosInterface{
  id:number, 
  nombre: string
  email: string, 
  password: string
  rol?: string
}

export interface NewUsuariosInterface{
  nombre: string
  email: string, 
  password: string
  rol: string
}

export class CrearUsuario{

  @IsString()
  nombre: string

  @IsString()
  @IsEmail()
  email: string 

  @IsString()
  @IsStrongPassword()
  password: string

  @IsString(
    {message:"El rol tiene que ser un valor string..."}
  )
  @IsOptional()
  rol?: string
  constructor(){}
}



@Injectable()
export class AppService {
  usuarios:UsuariosInterface[]
  constructor(){
    this.usuarios=[
      {id:1, nombre:"Luciana", email:"luciana@test.com", password:"123", rol:"user"},
      {id:2, nombre:"Juan", email:"juan@test.com", password:"123", rol:"user"},
      {id:3, nombre:"Romina", email:"romina@test.com", password:"123", rol:"admin"},
    ]
  }
  getHello(): string {
    return 'Hello World!';
  }

  getUsuarios(limit:number){
    if(limit>0){
      return this.usuarios.slice(0, limit)
    }
    return this.usuarios
  }

  crearUsuario(usuario:CrearUsuario){

    // validaciones pertinentes... que no duplique email... 
    let existe=this.usuarios.find(u=>u.email==usuario.email)
    if(existe){
      throw new BadRequestException(`Ya existen usuarios con email ${usuario.email}`)
    }

    let id=1
    if(this.usuarios.length>0){
      id=Math.max(...this.usuarios.map(d=>d.id))+1
    }

    let nuevoUsuario:UsuariosInterface={
      id, 
      ...usuario
    }

    this.usuarios.push(nuevoUsuario)

    return nuevoUsuario
    
  }

}
