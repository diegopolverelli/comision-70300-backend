import { Router } from 'express';
import { User } from '../dao/models/usuariosModel.js';
export const router=Router()

router.get('/',async(req,res)=>{

    try {
        let usuarios=await User.findAll({
            // where:"firstName='Juan'"
        })
        res.setHeader('Content-Type','application/json')
        res.status(200).json({usuarios})
    } catch (error) {
        console.log(error)
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Internal server error`, detalle: error.message})
    }

})

router.post("/", async(req, res)=>{
    let {firstName, lastName, age} = req.body
    if (!firstName){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`fistName is required`})
    }

    // validaciones... 

    try {
        let nuevoUsuario=await User.create({firstName, lastName, age})
        res.setHeader('Content-Type','application/json');
        return res.status(201).json({nuevoUsuario});
    } catch (error) {
        console.log(error)
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Internal server error`, detalle: error.message})
    }
})