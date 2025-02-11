// console.log("argv", process.argv)

let [dirNode, pathScript, ...argumentos] = process.argv   // ... son aquí el operador 

// console.log(argumentos)

let indicePort=argumentos.findIndex(a=>a=="--port")
if(indicePort==-1){
    console.log(`port es requerido...!!!`)
    process.exit()
}

console.log(`Server escuchando en puerto ${argumentos[indicePort + 1]}`)

// -D   --save-dev