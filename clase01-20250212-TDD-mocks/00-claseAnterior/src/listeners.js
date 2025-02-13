import fs from "fs"
process.on("exit",code=>{
    console.log(`Proceso terminado - codigo de salida: ${code}`)
})

process.on("uncaughtException", (error)=>{
    console.log(`Error: ${error.message}`)
})

let contador=0
let intervalo01=setInterval(() => {
    contador++
    console.log(`Proceso ${contador} finalizado...!!!`)

    if(contador>8){
        clearInterval(intervalo01)
    }
}, 500);

// process.exit(-4)

setTimeout(() => {
    throw new Error("Error de prueba...")
}, 2000);