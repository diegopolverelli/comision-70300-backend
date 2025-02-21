import passport from "passport"
import local from "passport-local"
import passportJWT from "passport-jwt"
import { generaHash, validaPass } from "../utils.js"
import { usuariosModelo } from "../dao/models/usersModelo.js"
import { config } from "./config.js"


export const inicializarPassport=()=>{
    passport.use("registro", new local.Strategy(
        {
            usernameField: "email",
            passReqToCallback: true 
        },
        async(req, username, password, done)=>{
            try {
                let {nombre, rol}=req.body
                if (!nombre){
                    return done(null, false)
                }

                // validaciones pertinentes... 
                password=generaHash(password)
                let usuario=await usuariosModelo.create({
                    nombre, email: username, password, rol
                })

                console.log(usuario)

                return done(null, usuario.toJSON())


            } catch (error) {
                return done(error)                
            }
        }
    ))

    passport.use("login", new local.Strategy(
        {
            usernameField: "email"
        },
        async(username, password, done)=>{
            try {
                let usuario=await usuariosModelo.findOne({email:username})
                if(!usuario) return done(null, false)

                if(!validaPass(password, usuario.password)) return done(null, false)

                return done(null, usuario)
            } catch (error) {
                return done(error)
            }
        }
    ))

    passport.use("validaToken", new passportJWT.Strategy(
        {
            secretOrKey: config.SECRET,
            jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken()
        },
        async(usuario, done)=>{
            try {
                return done(null, usuario)
            } catch (error) {
                return done(error)
            }
        }
    ))

    // passport.deserializeUser
}