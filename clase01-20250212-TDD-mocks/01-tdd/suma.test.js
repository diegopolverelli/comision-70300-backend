import { suma } from "./suma.js";
import colors from "colors"


let contadorPruebas=0
let pruebasOK=0
let resultado=0
let esperado=0

console.time("Demora en la ejecución del test:")

contadorPruebas++
console.log(`Prueba ${contadorPruebas}: Si la función recibe 2 números, retorna la suma de ambos`)
resultado=suma(4,3)
esperado=7
if(resultado==esperado){
    pruebasOK++
    console.log(`${"√".green} - prueba superada...!!!`)
}else{
    console.log(`${"Error".red}: se esperaba ${String(esperado).green}, valor de retorno ${String(resultado).red}`)
}


contadorPruebas++
console.log(`Prueba ${contadorPruebas}: Si la función recibe algún argumento no numércio retorna "error"`)
resultado=suma(4,"juan")
esperado="error"
if(resultado==esperado){
    pruebasOK++
    console.log(`${"√".green} - prueba superada...!!!`)
}else{
    console.log(`${"Error".red}: se esperaba ${String(esperado).green}, valor de retorno ${String(resultado).red}`)
}


contadorPruebas++
console.log(`Prueba ${contadorPruebas}: Si la función recibe n números, retorna la suma de todo ellos`)
resultado=suma(1,2,3,4,5)
esperado=15
if(resultado==esperado){
    pruebasOK++
    console.log(`${"√".green} - prueba superada...!!!`)
}else{
    console.log(`${"Error".red}: se esperaba ${String(esperado).green}, valor de retorno ${String(resultado).red}`)
}







console.timeEnd("Demora en la ejecución del test:")
console.log(`Cantidad de pruebas realizadas: ${contadorPruebas}`)
console.log(`Pruebas correctas: ${String(pruebasOK).green}  |  pruebas fallidas ${String(contadorPruebas-pruebasOK).red}`)

