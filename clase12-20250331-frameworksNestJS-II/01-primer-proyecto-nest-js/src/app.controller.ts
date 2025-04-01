import { BadGatewayException, BadRequestException, Body, Controller, Get, HttpException, HttpStatus, Logger, Param, ParseIntPipe, Post, Query, Request, ValidationPipe } from '@nestjs/common';
import { AppService, CrearUsuario, NewUsuariosInterface, UsuariosInterface } from './app.service';

@Controller("api/pruebas")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("saludo")  
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("suma/:a/:b")
  suma(@Param("a", ParseIntPipe) sumando1:number=0, @Param("b") sumando2:number=0){

    sumando1=Number(sumando1)  // "110"   "Juan"
    sumando2=Number(sumando2)
    if(isNaN(sumando1) || isNaN(sumando2)){
      // throw new HttpException(`Ingrese argumentos numéricos`, HttpStatus.BAD_REQUEST)
      throw new BadRequestException(`Ingrese argumentos numéricos`)
    }
    // sumando1=false
    return sumando1+sumando2
  }

  @Get("usuarios")
  usuarios(@Query("limit", new ParseIntPipe({optional:true})) limit: number){
  // usuarios(@Query("limit", ParseIntPipe) limit: number){

    Logger.warn(limit)
    Logger.warn(typeof limit)
    return this.appService.getUsuarios(limit)
  }

  @Post("usuarios")
  creaUsuario(@Body(new ValidationPipe({whitelist: true, forbidNonWhitelisted: true})) usuario:CrearUsuario, @Request() req:any){
    Logger.verbose(usuario)
    Logger.debug(req)

    // let {nombre, email, password, rol}=usuario
    // if(!nombre|| !email || !password || !rol) throw new BadGatewayException(`Complete todos los datos...!!!`)
    // usuario.id=100

    return this.appService.crearUsuario(usuario)
  }



}
