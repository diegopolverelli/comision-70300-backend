import { Router } from 'express';
export const router=Router()

router.get('/op1',(req,res)=>{

    let id=Date.now()
    console.time(id+" - Demora operación:")
    let valor1=Math.floor(Math.random()*(100)+1)      // Math.floor(Math.random()*(cantNrosAGenerar)+aPartirDelNro)    
    let valor2=Math.floor(Math.random()*(100)+1)      // Math.floor(Math.random()*(cantNrosAGenerar)+aPartirDelNro)    
    let resultado=valor1+valor2

    if(valor2>60){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`error 1`})
    }
    if(valor2<20){
        res.setHeader('Content-Type','application/json');
        return res.status(401).json({error:`error 2`})
    }

    console.log(resultado)
    console.timeEnd(id+" - Demora operación:")

    res.setHeader('Content-Type','application/json')
    res.status(200).json({resultado})
})

let contador=0
router.get('/op2',(req,res)=>{

    console.time("Demora operación:")
    contador++
    let resultado=0
    for(let i=0;i<60_000_000;i++){
        let valor1=Math.floor(Math.random()*(100)+1)      // Math.floor(Math.random()*(cantNrosAGenerar)+aPartirDelNro)    
        resultado+=valor1
    }

    console.log(contador, resultado)
    console.timeEnd("Demora operación:")

    res.setHeader('Content-Type','application/json')
    res.status(200).json({resultado})
})