export const errorHandler=(error, req, res, next)=>{

    // hacer log del error... 

    if(error.code){
        // fue generado por el CustomError class
        console.log(error.message)
        console.log(error.cause)
        res.setHeader('Content-Type','application/json');
        return res.status(error.code).json({error:`Interal server error`})
    }else{
        console.log(error)
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Interal server error / error handler`})
    }
}