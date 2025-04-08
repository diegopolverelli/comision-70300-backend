import { Logger, MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ClientesModule } from './clientes/clientes.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PruebaMiddleware } from './middlewares/prueba/prueba.middleware';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot({envFilePath:"./src/.env"}),
    MongooseModule.forRoot(process.env.MONGO_URL!, {dbName:"comis70300clase13"}),
    JwtModule.register({
      global: true, 
      secret: process.env.SECRET, 
      signOptions:{ expiresIn: "1h"}
    }),
    ClientesModule,
    UsuariosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  constructor(){
    Logger.debug(process.env.MONGO_URL, "AppModule")
  }

  configure(consumer: MiddlewareConsumer) {
    // throw new Error('Method not implemented.');
    consumer.apply(PruebaMiddleware).forRoutes({
      path:"*", 
      method: RequestMethod.ALL
    })
  }
  
}
