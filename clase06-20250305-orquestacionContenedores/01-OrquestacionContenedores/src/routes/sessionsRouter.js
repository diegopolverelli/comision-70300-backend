import { Router } from 'express';
import bcrypt from 'bcrypt'
import { usuariosModelo } from '../models/usuarios.model.js';
export const router=Router()

router.post('/login',async(req,res)=>{
    let {email, password, navegador}=req.body
    if(!email || !password){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Complete email y password`})
    }

    try {
        let usuario=await usuariosModelo.findOne({email})
        if(!usuario){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`No existen usuarios con email ${email}`})
        }
    
        if(!bcrypt.compareSync(password, usuario.password)){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`Credenciales incorrectas`})
        }
    
        console.log(`Login correcto para el usuario ${usuario.nombre} ${usuario.apellido}`)
    
        if(navegador){
            return res.redirect('/?mensaje=Login correcto...!!!')
        }
    
    
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({status:"Login correcto...!!!", payload:usuario });
    } catch (error) {
        console.log(error)
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Error Interno del Servidor`})
    }
    

})

router.post('/registro',async(req,res)=>{
    let {nombre, apellido, email, password, navegador}=req.body
    if(!nombre || !apellido || !email || !password){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Faltan datos...!!!`})
    }

    try {
        let existe=await usuariosModelo.findOne({email})
        if(existe){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`Ya existen usuarios con email ${email} en la BD`})
        }
    
        password=bcrypt.hashSync(password, bcrypt.genSaltSync(10))
        let nuevoUsuario={
            nombre, email, password, apellido
        }
    
        nuevoUsuario=await usuariosModelo.create(nuevoUsuario)
        console.log(`Usuario registrado correctamente: ${email}`)
    
        if(navegador){
            return res.redirect('/?mensaje=Registro correcto...!!!')
        }
    
        res.setHeader('Content-Type','application/json');
        res.status(200).json({
            nuevoUsuario
        });
    } catch (error) {
        console.log(error)
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Error Interno del Servidor`})
    }
});