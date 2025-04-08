import { Injectable, Logger } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Model } from 'mongoose';
import { Cliente } from './schema/cliente.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ClientesService {

  // constructor(@InjectModel(Cat.name) private catModel: Model<Cat>) {}
  constructor(@InjectModel(Cliente.name) private clientesModelo: Model<Cliente>){}

  create(createClienteDto: CreateClienteDto) {
    // return 'This action adds a new cliente';
    // createClienteDto.temperatura=0
    return this.clientesModelo.create(createClienteDto)
  }

  async findAll() {
    // return `This action returns all clientes`;
    Logger.verbose(await this.clientesModelo.find(), "ClientesService")
    return this.clientesModelo.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} cliente`;
  }

  update(id: number, updateClienteDto: UpdateClienteDto) {
    return `This action updates a #${id} cliente`;
  }

  remove(id: number) {
    return `This action removes a #${id} cliente`;
  }
}
