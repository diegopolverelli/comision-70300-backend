import bcrypt from "bcrypt"

export const procesaErrores=(error, res)=>{
    console.log(error);
    res.setHeader('Content-Type','application/json');
    return res.status(500).json(
        {
            error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
            // detalle:`${error.message}`
        }
    )
}

export const generaHash=password=>bcrypt.hashSync(password, 10)
export const validaPass=(pass, hash)=>bcrypt.compareSync(pass, hash)