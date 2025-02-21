import { ProductosDAO } from "../dao/ProductosDAO.js"
import { procesaErrores } from "../utils.js"

export class ProductsController{
    static getProducts=async(req, res)=>{
        try {
            let productos=await ProductosDAO.get()
            res.setHeader('Content-Type','application/json');
            return res.status(200).json({productos});
        } catch (error) {
            procesaErrores(error, res)
        }
    }

    static createProducto=async(req, res)=>{
        let {title, code, stock, price}= req.body
        if(!title || !code){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`title / code son requeridos`})
        }

        // validaciones pertinentes... 
        try {
            let nuevoProducto=await ProductosDAO.create({title, code, stock, price})
            res.setHeader('Content-Type','application/json');
            return res.status(201).json({payload:"Producto generado...!!!", nuevoProducto});
        } catch (error) {
            procesaErrores(error, res)
        }
    }
}