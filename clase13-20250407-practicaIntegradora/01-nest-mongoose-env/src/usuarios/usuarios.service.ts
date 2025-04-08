import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsuariosService {

  usuarios:Usuario[]=[
    {id:1, nombre:"Luciana", email:"luciana@test.com", password:"123", rol:"user"},
    {id:2, nombre:"Juan", email:"juan@test.com", password:"123", rol:"user"},
    {id:3, nombre:"Romina", email:"romina@test.com", password:"123", rol:"admin"},
  ]

  constructor(
    private jwt:JwtService
  ){}

  login(body:any){
    let {username, password}=body
    let usuario=this.usuarios.find(u=>u.nombre==username && u.password==password)
    if(!usuario){
      throw new UnauthorizedException(`Credenciales inválidas`)
    }

    let token=this.jwt.sign(usuario)

    return {
      message:`Login exitoso`,
      usuario, 
      token
    }
  }

  create(createUsuarioDto: CreateUsuarioDto) {
    return 'This action adds a new usuario';
  }

  findAll() {
    return `This action returns all usuarios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
