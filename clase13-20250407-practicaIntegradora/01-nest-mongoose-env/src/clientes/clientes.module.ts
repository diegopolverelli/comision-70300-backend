import { Module } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { ClientesController } from './clientes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Cliente, ClienteSchema } from './schema/cliente.schema';

@Module({
  imports:[
    MongooseModule.forFeature(
      [
        {name: Cliente.name, schema: ClienteSchema}, // otros modelos...
      ]
    )
  ],
  controllers: [ClientesController],
  providers: [ClientesService],
})
export class ClientesModule {}
