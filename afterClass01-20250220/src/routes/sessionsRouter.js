import { Router } from 'express';
import passport from 'passport';
import jwt from "jsonwebtoken"
import { UsersDTO } from '../DTO/usersDTO.js';
import { config } from '../config/config.js';
export const router = Router()

router.post(
    '/register',
    passport.authenticate("registro", {session: false}),
    (req, res) => {

        // req.user    // si sale OK el passport.authenticate

        res.setHeader('Content-Type', 'application/json')
        res.status(200).json({message:"Registro exitoso", usuario: new UsersDTO(req.user)})
    }
)

router.post(
    "/login",
    passport.authenticate("login", {session:false}),
    (req, res)=>{

        let usuario=new UsersDTO(req.user)
        usuario={
            ...usuario
        }
        let token=jwt.sign(usuario, config.SECRET, {expiresIn:"1h"})

        res.setHeader('Content-Type','application/json');
        return res.status(200).json({message:"Login exitoso...!!!", user: new UsersDTO(req.user), token});
    }
)