import { productosModelo } from "./models/productoModelo.js";

export class ProductosDAO{
    static async get(){
        return await productosModelo.find().lean()
    }

    static async getBy(filtro={}){  // {title:"Martillo"}
        return await productosModelo.findOne(filtro).lean()
    }

    static async create(producto){
        let nuevoProducto=await productosModelo.create(producto)
        return nuevoProducto.toJSON()
    }
}