import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ClienteDocument = HydratedDocument<Cliente>;

@Schema({
    strict: false, 
    // collection: "clientes2021",
    timestamps: true
})
export class Cliente {
  @Prop()
  razonSocial: string;

  @Prop({
    type: String,
    required: true, 
    unique: true
  })
  cuit: string;

  @Prop()
  ctaCte?: number;
//   constructor(){
//     this.cuit="123"
//   }
}

export const ClienteSchema = SchemaFactory.createForClass(Cliente);
