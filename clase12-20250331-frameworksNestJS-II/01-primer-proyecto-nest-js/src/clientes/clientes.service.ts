import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from './entities/cliente.entity';
import { ProductosService } from 'src/productos/productos.service';

@Injectable()
export class ClientesService {
  clientes:Cliente[]

  constructor(private readonly productosService: ProductosService){
    this.clientes=[
      {
        code:1, 
        razonSocial:"La Casa del Corcho", 
        cuit: ""
      },
      {
        code:2, 
        razonSocial:"Juan & Juan SRL", 
        cuit: ""
      },
    ]
  }

  clientesProductos(){
    let respuesta={
      clientes:this.clientes, 
      productos:this.productosService.findAll()
    }

    return respuesta
  }

  create(createClienteDto: CreateClienteDto) {
    let id=1
    if(this.clientes.length>0){
      id=Math.max(...this.clientes.map(d=>d.code))+1
    }

    let nuevoCliente:Cliente={
      code:id, 
      ...createClienteDto
    }

    this.clientes.push(nuevoCliente)

    return nuevoCliente
    
    // return 'This action adds a new cliente';
  }

  findAll() {
    return this.clientes;
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
