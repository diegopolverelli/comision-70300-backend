import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesModule } from './clientes/clientes.module';
import { ProductosModule } from './productos/productos.module';

@Module({
  imports: [
    ClientesModule, 
    ProductosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(){}
}

let nombre:string="Juan"
let apellido="Perez"

let puntos:number | undefined
let valor:any

puntos=undefined
puntos=480

// apellido=false

type TypePersona={
  name:string
  email:string
}
let persona01:TypePersona={
  name: 'Pedro',
  email: 'pedro@test.com'
}

interface PersonaInterface{
  name:string
  email?:string
}

let persona02:PersonaInterface={
  name:"Carolina", 
  // edad:10,
}

class Heroe{
  name:string 
  alias: string
  constructor(name:string, alias:string){
    this.name=name
    this.alias=alias
  }
}

let heroe01:Heroe={
  name: 'Robin',
  alias: 'D.Grayson'
}