import mongoose from "mongoose";

export const productosModelo=mongoose.model(
    "productos", 
    new mongoose.Schema(
        {
            title: String, 
            code: {
                type: String, unique:true
            },
            price: {type: Number, default:0}, 
            stock: {type: Number, default:0}
        },
        {
            timestamps: true   
        }
    )
)

// productosModelo.find